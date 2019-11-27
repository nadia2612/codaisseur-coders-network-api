import api from "../../api";

// src/store/post/actions.js

export default function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`)
      .then(post => {
        dispatch(setPost(post));
      })
      .then(() => api(`/posts/${id}/comments`))
      .then((comments) => {dispatch(setComments(comments.rows))});
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
