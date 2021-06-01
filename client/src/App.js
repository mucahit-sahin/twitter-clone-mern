import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Messages from "./pages/Messages/Messages";
import Lists from "./pages/Lists/Lists";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import setAuthToken from "./utils/setAuthToken";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authActions";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Switch>
      <AuthRoute path="/" exact>
        <SignIndex />
      </AuthRoute>
      <AuthRoute path="/login">
        <Login />
      </AuthRoute>
      <AuthRoute path="/signup">
        <Signup />
      </AuthRoute>
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
