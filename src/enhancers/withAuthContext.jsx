import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

const withAuthContext = WrappedComponent =>
  function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {context => <WrappedComponent {...props} authContext={context} />}
      </AuthContext.Consumer>
    );
  };

export default withAuthContext;
