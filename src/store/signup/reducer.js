const initialState = {
    accessToken: null,
    profile: null
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "auth/USER_LOGGED_IN": {
        // => Ask yourself: what is action.payload?
        return { accessToken: action.payload};
      }
      default: {
        return state;
      }
    }
  }