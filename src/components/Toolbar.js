import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <nav>
            <Link to="/">Home</Link>
          </nav>

          <nav>
            <Link to="/developers">Developers</Link>
          </nav>

          <nav>
           
            {this.props.profile ? (
              <div>Logged in: {this.props.profile.name}</div>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </nav>
          <nav>
            <Link to="/posts">All posts</Link>
          </nav>
          <nav>
            <Link to="/signup">Sign up</Link>
          </nav>

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
