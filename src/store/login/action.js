// A thunk creator
import api from "../../api";

export default function login(email, password) {
  console.log("action ");
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    // TODO:
    // (1) make a POST API request to `/login`
    // (2) after getting back the access token,
    //      dispatch the `saveAccessToken` action
    api(`/login`, {
      method: "POST",
      body: {
        email,
        password
      }
    }).then(token => {
      api("/me", { jwt: token.jwt })
      .then(profile =>
        dispatch(userLoggedIn(token.jwt, profile))
      );
    });
  };
}

// An action creator
export function userLoggedIn(accessToken, profile) {
  console.log("userLoggedIn", accessToken, profile);

  return {
    type: "auth/USER_LOGGED_IN",
    payload: { accessToken, profile }
  };
}
