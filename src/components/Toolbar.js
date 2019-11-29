import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends React.Component {
  render() {
    console.log("This.Props",this.props)
    return (
      <div className="Toolbar">
        <ul>
          <nav>
            <Link to="/">Home</Link>
          
            <Link to="/developers">Developers</Link>
         
           
            {this.props.profile ? (
              <div>Logged in: {this.props.profile.name}</div>
            ) : (
              <Link to="/login">Log in</Link>
            )}
         
            <Link to="/posts">All posts</Link>
         
            <Link to="/signup">Sign up</Link>
          </nav>

        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("REDUX STATE from TOOLBAR",reduxState)
  return {
    profile: reduxState.auth.profile
  };
}

export default connect(mapStateToProps)(Toolbar);
