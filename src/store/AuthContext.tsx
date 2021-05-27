import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (token: string) => {},
  logout: (token: string) => {},
  token: '',
});

interface CtxStateType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState<string>(initialToken ? initialToken : '');
  const isLoggedin = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
  };
  const ctxState: CtxStateType = {
    isLoggedIn: isLoggedin,
    login: loginHandler,
    logout: logoutHandler,
    token: token,
  };
  return (
    <AuthContext.Provider value={ctxState}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
