import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Redirect, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Messages from "./pages/Messages/Messages";
import Lists from "./pages/Lists/Lists";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user] = React.useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Switch>
      <Route path="/" exact>
        {user ? <Redirect to="/home" /> : <SignIndex />}
      </Route>
      <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route>
      <Route path="/signup">
        {user ? <Redirect to="/home" /> : <Signup />}
      </Route>
      <ProtectedRoute path="/home" exact>
        <Home />
      </ProtectedRoute>
      <ProtectedRoute path="/Explore">
        <Explore />
      </ProtectedRoute>
      <ProtectedRoute path="/Notifications">
        <Notifications />
      </ProtectedRoute>
      <ProtectedRoute path="/Messages">
        <Messages />
      </ProtectedRoute>
      <ProtectedRoute path="/Bookmarks">
        <Bookmarks />
      </ProtectedRoute>
      <ProtectedRoute path="/Lists">
        <Lists />
      </ProtectedRoute>
      <ProtectedRoute path="/Profile">
        <Profile />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
