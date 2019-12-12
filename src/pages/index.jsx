import React, { useState, useContext } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Layout from '../layouts/Main';
import { User } from '../contexts/User';
import Unauthenticated from '../virtual_pages/Index/Unauthenticated';
import Authenticated from '../virtual_pages/Index/Authenticated';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const { dispatch } = useContext(User);

  useFirebase((firebase) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        dispatch({ user, action: 'set' });
      }
    });
    setLoading(false);
  }, []);

  return (
    <Layout loading={loading} isAuth={isAuth}>
      {isAuth ? (
        <Authenticated />
      ) : (
        <Unauthenticated />
      )}
    </Layout>
  );
};

export default IndexPage;
