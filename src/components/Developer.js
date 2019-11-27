import React from "react";
import { connect } from "react-redux";

export default class Developer extends React.Component {
  render() {
    console.log("kjhfgdrewrfghj", this.props);
   

    return (
      <div>
        <ul>
          <strong>name:</strong>
          {this.props.name} email:{this.props.email}
        </ul>
      </div>
    );
  }
}
