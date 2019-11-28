// src/components/DevelopersList.js
import React, { Component } from "react";
import { connect } from "react-redux";
import Developer from "./Developer";
import fetchDevelopers from "../store/developers/actions";

// The "unconnected" inner component:
class DevelopersList extends Component {
  componentDidMount() {
    // api("/developers").then(data => {
    // this.props.dispatch({
    //   type: "developers/FETCHED",
    //   payload: data
    // Tell the Redux store the data has been fetched
    this.props.dispatch(fetchDevelopers);
    // console.log("fetched data", data);
    // });
  }

  render() {
    const loading = !this.props.devs;
    console.log("fgfgh",{ props: this.props });

    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>

            {this.props.devs.rows.map(developer => {
              return (
                <Developer name={developer.name} email={developer.email} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:

function mapStateToProps(reduxState) {
   console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}

// ...which is what we export as the default (only) export

// const connectingHOC = connect(mapStateToProps);
// const ConnectedDevelopersList = connectingHOC(DevelopersList);
export default connect(mapStateToProps)(DevelopersList);
