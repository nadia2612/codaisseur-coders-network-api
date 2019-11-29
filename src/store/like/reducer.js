const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/SET_LIKE":{
      return [ ...state, {...action.payload} ];

    }
    case "post/SET_DISLIKE":{
      return [...state, {...action.payload}];

    }
    default: {
      return state;
    }
  }
}
