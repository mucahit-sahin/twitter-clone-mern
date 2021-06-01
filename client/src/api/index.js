/*import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/api/login", formData);
export const signUp = (formData) => API.post("/api/signup", formData);

export const getAllPosts = () => API.get("/api/posts");
export const createPost = (formData) => API.post("/api/posts", formData);
export const getUserPosts = (id) => API.get(`/api/posts/user/${id}`);
export const getPost = (id) => API.get(`/api/posts/${id}`);*/

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/
/*
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);*/

export default api;
