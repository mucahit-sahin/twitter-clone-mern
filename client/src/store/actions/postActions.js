import api from "../../api/index";
import {
  CREATE_POST,
  GET_ALL_POST,
  GET_POST,
  GET_USER_POSTS,
  LIKED_POST,
  UNLIKED_POST,
} from "./types";

export const shareTweet = (post) => async (dispatch) => {
  try {
    const { data } = await api.post("/posts", post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.get("/posts");

    dispatch({ type: GET_ALL_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/posts/user/${userId}`);

    dispatch({ type: GET_USER_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/posts/${postId}`);

    dispatch({ type: GET_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.put(`/posts/like/${postId}`);

    dispatch({ type: LIKED_POST, payload: { id: postId, data } });
  } catch (error) {
    console.log(error);
  }
};
export const unlikePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.put(`/posts/unlike/${postId}`);

    dispatch({
      type: UNLIKED_POST,
      payload: { id: postId, data },
    });
  } catch (error) {
    console.log(error);
  }
};
