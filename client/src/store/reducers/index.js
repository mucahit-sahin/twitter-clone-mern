import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer,
});
