import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  const auth = localStorage.getItem("token");
  return <Route {...props}>{auth ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;
