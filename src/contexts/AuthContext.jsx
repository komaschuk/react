import React, { Component, createContext } from 'react';
import userData from '../config/user-data';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  onSignOut: () => null,
  onSignIn: () => null,
});

export default class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;

  state = {
    isAuthenticated: false,
    user: {},
  };

  onSignIn = () => {
    this.setState({
      isAuthenticated: true,
      user: userData,
    });
  };

  onSignOut = () => {
    this.setState({
      isAuthenticated: false,
      user: {},
    });
  };

  render() {
    const { isAuthenticated, user } = this.state;
    const { children } = this.props;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
          onSignOut: this.onSignOut,
          onSignIn: this.onSignIn,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}
