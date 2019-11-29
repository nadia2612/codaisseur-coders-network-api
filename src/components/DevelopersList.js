// src/components/DevelopersList.js
import React, { Component } from "react";
import { connect } from "react-redux";
import Developer from "./Developer";
import fetchDevelopers from "../store/developers/actions";

// The "unconnected" inner component:
class DevelopersList extends Component {
  state = { searchInput: "", search: "" };

  componentDidMount() {
    // Tell the Redux store the data has been fetched
    this.props.dispatch(fetchDevelopers);
    // console.log("fetched data", data);
    // });
  }
  // const devsSearch=this.props.devs.filter(search=>{

  // })

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
    console.log("====", this.state.searchInput);
  };

  submitForm = event => {
    const { searchInput } = this.state;
    event.preventDefault();
    this.setState({ search: searchInput });
  };

  render() {
    const loading = !this.props.devs;

    console.log("State", this.props.devs);

    return (
      <div>
        <h1>Codaisseur developers</h1>
        <form onSubmit={this.submitForm}>
          <label>Search for a developer:</label>
          <input
            placeholder={"Developer"}
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button type="submit">Search!</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.devs.count} developers!</p>

            {this.props.devs.rows
              .filter(developer => {
                return developer.name.toLowerCase().includes(this.state.search);
              })
              .map(developer => {
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
