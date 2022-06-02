import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  username: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUser = localStorage.getItem("username");
  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialUser);
  const userisLoggedIn = !!token;

  const loginHandler = (token, username) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logoutHandler = (t) => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const contextValue = {
    token: token,
    username: username,
    isLoggedIn: userisLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
