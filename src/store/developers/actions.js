// src/store/developers/actions.js
import api from "../../api";

export default function fetchDevelopers(dispatch, getState) {
  api("/developers?offset=1&limit=220")
  .then(data => {
    // note: just `dispatch` here now
    console.log(data, "FetchDev");
    dispatch(developersFetched(data));
    //lifecycle method
  });
}

function developersFetched(data) {
  return {
    type: "developers/FETCHED",
    payload: data
    //action creator
  };
}
