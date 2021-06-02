import {
  CREATE_POST,
  GET_ALL_POST,
  GET_POST,
  GET_USER_POSTS,
  LIKED_POST,
  UNLIKED_POST,
} from "../actions/types";

function postsReducer(state = { posts: [], userPosts: [] }, action) {
  switch (action.type) {
    case GET_ALL_POST:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case GET_POST:
      return action.payload;
    case LIKED_POST:
    case UNLIKED_POST:
      const post = state.posts.find((post) => post._id === action.payload.id);
      post.likes = action.payload.data;
      return { ...state };
    default:
      return state;
  }
}
export default postsReducer;
