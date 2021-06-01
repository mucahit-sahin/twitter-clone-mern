import api from "../../api/index";

export const shareTweet = (post) => async (dispatch) => {
  try {
    const { data } = await api.post("/posts", post);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.get("/posts");

    dispatch({ type: "GET_ALL_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/posts/user/${userId}`);

    dispatch({ type: "GET_USER_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getPost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/posts/${postId}`);

    dispatch({ type: "GET_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
