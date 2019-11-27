import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          <li>
            {this.props.profile ? <div>Logged in: {this.props.profile.name}</div> : <Link to="/login">Log in</Link>}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    profile: reduxState.auth.profile
  };
}

export default connect(mapStateToProps)(Toolbar);
