// src/store/auth/reducer.js
const initialState = {
  accessToken: null,
  profile: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

























// const initialState = { 
// jwt: null
//  };

// export default function reducer(state = initialState, action) {
//   console.log("reducer", action);
  
//   switch (action.type) {
//     case "auth/SAVE_ACCESS_TOKEN": {
//       // => Ask yourself: what is action.payload?
//       return { ...state, jwt: action.payload.jwt };
//     }
  
//     default: {
//       return state;
//     }
//   }
// }
