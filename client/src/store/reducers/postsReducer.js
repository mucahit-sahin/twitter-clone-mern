import {
  ADD_COMMENT,
  CREATE_POST,
  GET_ALL_POST,
  GET_POST,
  GET_USER_POSTS,
  UPDATE_LIKES,
} from "../actions/types";

function postsReducer(state = { posts: [], userPosts: [], post: {} }, action) {
  switch (action.type) {
    case GET_ALL_POST:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case UPDATE_LIKES:
      const post = state.posts.find((post) => post._id === action.payload.id);
      post.likes = action.payload.data;
      return { ...state };
    case GET_POST:
      return { ...state, post: action.payload };
    case ADD_COMMENT:
      const posts = state.posts;
      posts.find((post) => post._id === action.payload.id).comments =
        action.payload.data;
      return { ...state, posts: posts };
    default:
      return state;
  }
}
export default postsReducer;
