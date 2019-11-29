import api from "../../api";
import fetchPost from "../post/actions";

export default function fetchPostLike(id) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.accessToken;
    api(`/posts/${id}/likes`, {
      method: "POST",
      jwt
    }).then(_=> {
      dispatch(fetchPost(id));
    });
  };
}
// Actually we don't need a reducer, API is broken and I can't change Redux State (Object)




// export function setLike(like) {
//   return {
//     type: "post/SET_LIKE",
//     payload: like
//   };
// }

// export function setDisLike(like) {
//   return {
//     type: "post/SET_DISLIKE",
//     payload: like
//   };
// }
