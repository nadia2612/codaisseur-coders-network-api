const initialState = {};

export default function reducer(state = initialState, action) {
  // console.log("reduser")
  switch (action.type) {
    case "posts/FETCHED": {
      console.log("reducer",action )
      return { ...action.payload };
      
 
    }
 default: {
  return state}
}
}