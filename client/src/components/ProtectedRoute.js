import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { loadUser } from "../store/actions/authActions";

const ProtectedRoute = ({ children, ...props }) => {
  const auth = localStorage.getItem("token");
  const dispatch = useDispatch();
  if (auth) {
    dispatch(loadUser());
  }
  return <Route {...props}>{auth ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;
