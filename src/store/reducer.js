// src/store/reducer.js
import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import postReducer from "./post/reducer";
import authReducer from "./login/reducer";
import reducer from "./postsList/reducer"
import like from "./like/reducer"


export default combineReducers({
  developers: developersReducer,
  post: postReducer,
  auth: authReducer,
  posts: reducer,
  like:like
});
