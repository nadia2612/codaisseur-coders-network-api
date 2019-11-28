import api from "../../api";

export default function fetchPosts() {
  return function thunk(dispatch, getState) {
    api("/posts?offset=1&limit=200").then(posts => {
      console.log(posts, "FetchPosts");
      dispatch(postsFetched(posts));
    });
  };
}

function postsFetched(posts) {
  console.log("postsFetched", posts);
  return {
    type: "posts/FETCHED",
    payload: posts
  };
}

// export default function fetchPosts(dispatch, getState) {
//   api("/posts?offset=1&limit=2")
//   .then(posts => {
//     console.log(posts, "FetchPosts");
//     dispatch(postsFetched(posts));

//   });
// }
