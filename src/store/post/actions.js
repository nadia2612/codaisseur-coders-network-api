import api from "../../api";
//import store from "../../store";

// src/store/post/actions.js

export default function fetchPost(id) {
  // console.log( "token",this.props.auth.accessToken)
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        dispatch(setPost(post));
      })
      
      .then(() => api(`/posts/${id}/comments`))
      .then(comments => {
        dispatch(setComments(comments.rows));
      });
  };
}

export function setPost(post) {
  return {
    type: "post/SET_POST",
    payload: post
  };
}

export function setComments(comments) {
  return { type: "post/SET_COMMENTS", payload: comments };
}
export function setLike(like) {
  return { type: "post/SET_LIKE", payload: like };
}
export function setDisLike(disLike) {
  return { type: "post/SET_DISLIKE", payload: disLike };
}
