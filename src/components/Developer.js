import React from "react";
import { connect } from "react-redux";

export default class Developer extends React.Component {
  render() {
    // console.log("kjhfgdrewrfghj", this.props);
   

    return (
      <div>
        <ul>
          name:  <strong>{this.props.name}</strong> email:  <strong>{this.props.email}</strong>
        </ul>
      </div>
    );
  }
}
