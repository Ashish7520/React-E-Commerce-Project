import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState("");

  const isLogin = !!token;

  const loginHandler = (token, email) => {
    localStorage.setItem("token", token);
    setToken(token);

    if (email) {
      setEmail(email);
      const convertedEmail = email.replace(/[@.]/g, "");
      localStorage.setItem("email", convertedEmail);
    }

    console.log("email -->", email, "token", token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
  };

  const contextValue = {
    token: token,
    email: email,
    isLogin: isLogin,
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
