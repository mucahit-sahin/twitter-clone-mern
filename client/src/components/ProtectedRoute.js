import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...props }) => {
  const [user] = React.useState(JSON.parse(localStorage.getItem("profile")));

  return <Route {...props}>{user ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;
