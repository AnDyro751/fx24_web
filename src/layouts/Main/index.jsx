import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import Loading from '../../components/Loading/FullPage';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();

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
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default LayoutMain;
