/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { ContextUserProvider } from './src/contexts/User';
import 'bootstrap-4-grid/css/grid.min.css';
import './src/css/global.css';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ContextUserProvider>{element}</ContextUserProvider>
);

wrapRootElement.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  element: PropTypes.object.isRequired,
};
