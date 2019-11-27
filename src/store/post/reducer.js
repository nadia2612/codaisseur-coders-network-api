const initialState = { post: undefined, comments: undefined };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/SET_POST": {
      // => Ask yourself: what is action.payload?
      return { ...state, post: action.payload };
    }
    case "post/SET_COMMENTS": {
      return { ...state, comments: action.payload };
    }
    default: {
      return state;
    }
  }
}
