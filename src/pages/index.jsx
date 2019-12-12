import React, { useState, useContext } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import Layout from '../layouts/Main';
import { User } from '../contexts/User';
import SEO from '../components/seo';
import { es } from '../locales/es.json';

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
      <>
        <SEO title={es.indexPage.title} />
        {isAuth ? (
          null
        ) : (
          null
        )}
      </>
    </Layout>
  );
};

export default IndexPage;
