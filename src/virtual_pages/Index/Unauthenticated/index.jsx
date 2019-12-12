import React from 'react';
import Form from '../../../components/Forms/SignUp';

const UnauthenticatedIndex = () => (
  <div className="row u__no_margin justify-content-center full_height align-items-center">
    <div className="col-11 u__no_padding">
      <div className="row justify-content-center u__no_margin">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 u__no_padding">
          <Form />
        </div>
      </div>
    </div>
  </div>
);

export default UnauthenticatedIndex;
