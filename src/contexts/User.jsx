/* eslint-disable consistent-return */
import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const User = createContext();

const initialState = {
  username: '',
  email: '',
  premium: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'set':
      return { ...state, ...action.user };
    default:
      return state;
  }
};

function ContextUserProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <User.Provider value={value}>{children}</User.Provider>;
}

ContextUserProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

const ContextUserConsumer = User.Consumer;

export { User, ContextUserProvider, ContextUserConsumer };
