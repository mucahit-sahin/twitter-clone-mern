function postsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_POST":
      return action.payload;
    case "CREATE_POST":
      return [...state, action.payload];
    case "GET_USER_POSTS":
      return action.payload;
    case "GET_POST":
      return action.payload;
    default:
      return state;
  }
}
export default postsReducer;
