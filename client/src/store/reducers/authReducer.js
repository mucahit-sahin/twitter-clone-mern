import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  //USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return { ...state, user: payload };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      console.log("loginyadaregister " + payload);
      return {
        ...state,
        ...payload,
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
