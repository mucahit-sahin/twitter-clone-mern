import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ children, ...props }) => {
  const auth = localStorage.getItem("token");
  return <Route {...props}>{!auth ? children : <Redirect to="/home" />}</Route>;
};

export default AuthRoute;
