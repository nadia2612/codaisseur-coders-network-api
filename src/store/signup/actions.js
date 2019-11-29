import api from "../../api";

export default function signup(name, email, password) {
  console.log("signup action with following e-mail:", email);

  return function thunk(dispatch, getState) {

    api(`/signup`, {   
      method: "POST",
      body: {
        name,
        email,
        password
      }
    }).then(token => { 
      console.log("API answered signup with token", token);
      api("/me", { jwt: token.jwt })
      .then(profile =>
        dispatch(userLoggedIn(token.jwt, profile))
      );
    });
  };
}

export function userLoggedIn(accessToken, profile) {
  console.log("userLoggedIn", accessToken, profile);

  return {
    type: "auth/USER_LOGGED_IN",
    payload: { accessToken, profile }
  };
}