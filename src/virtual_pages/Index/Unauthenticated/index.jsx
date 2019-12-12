import React from 'react';
import Form from '../../../components/Forms/SignUp';

const UnauthenticatedIndex = () => (
  <div className="row u__no_margin justify-content-center">
    <div className="col-11 u__no_padding">
      <div className="row u__no_margin">
        <div className="col-5 u__no_padding">
          <Form />
        </div>
      </div>
    </div>
  </div>
);

export default UnauthenticatedIndex;
