// src/store/reducer.js
import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import postReducer from "./post/reducer";
import authReducer from "./login/reduser"

export default combineReducers({
  developers: developersReducer,
  post: postReducer,
  auth: authReducer
});
