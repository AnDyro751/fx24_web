import React from 'react';
import PropTypes from 'prop-types';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import Loading from '../../components/Loading/FullPage';

const LayoutMain = ({ isAuth, loading, children }) => {
  if (loading) {
    return <Loading />;
  }
  if (isAuth) {
    return (
      <Authenticated>
        {children}
      </Authenticated>
    );
  }
  return (
    <Unauthenticated>
      {children}
    </Unauthenticated>
  );
};

LayoutMain.defaultProps = {
  isAuth: false,
  loading: false,
};

LayoutMain.propTypes = {
  isAuth: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.object.isRequired,
};

export default LayoutMain;
