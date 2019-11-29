import React from "react";
import { connect } from "react-redux";
import fetchPostLike from "../store/like/actions";
import fetchPostDisLike from "../store/like/actions";
export class Like extends React.Component {
  implementLike = () => {
    const id = this.props.post.id;
    console.log("id", id);
    this.props.dispatch(fetchPostLike(id));
  };

  implementDisLike = () => {
    const {id} = this.props.post;
    console.log("id", id);
    this.props.dispatch(fetchPostDisLike(id));
  };
  
  render() {
    console.log("props of like", this.props);

    return (
      <div>
        <ul>
          <strong>Like:</strong>
          <button
            onClick={() => {
              this.implementLike();
            }}
          >
            Like:{this.props.post.post_likes.length}
          </button>
          <button
            onClick={() => {
              this.implementDisLike();
            }}
          >
            DisLike:{this.props.post.post_likes.length}
          </button>
          {/* DisLike shows fake counter*/}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  console.log("PostsRS", reduxState.post.post);
  console.log("AuthRS", reduxState.auth.accessToken);
  return {
    post: reduxState.post.post,
    token: reduxState.auth.accessToken
  };
}

export default connect(mapStateToProps)(Like);
