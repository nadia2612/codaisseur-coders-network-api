import api from "../../api";
import fetchPost from "../post/actions";

export default function fetchPostDisLike(id) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.accessToken;
    api(`/posts/${id}/likes`, {
      method: "DELETE",
      jwt
    }).then(_=> {
      dispatch(fetchPost(id));
    });
  };
}