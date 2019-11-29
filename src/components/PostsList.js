import React, { Component } from "react";
import { connect } from "react-redux";
import fetchPosts from "../store/postsList/actions";
import { Link } from "react-router-dom";

export class PostsList extends Component {
  componentDidMount() {
    console.log("cdm", this.props);
    this.props.dispatch(fetchPosts());
    console.log("cdm2", this.props);
  }

  render() {
    const loading = !this.props.posts.rows;
    return (
      <div>
        <h1>Posts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.posts.count} posts!</p>
            {this.props.posts.rows.map(post => {
              return <Link to={`/read/${post.id}`}><p>{post.title}</p></Link>;
            })}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    posts: reduxState.posts
  };
};

export default connect(mapStateToProps)(PostsList);
