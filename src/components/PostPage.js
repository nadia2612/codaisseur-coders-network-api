import React from "react";
import { connect } from "react-redux";
import fetchPost from "../store/post/actions";
import ReactMarkdown from "react-markdown"
import Like from "./Like"
class PostPage extends React.Component {


  

  componentDidMount() {
    const post_id = this.props.match.params.id;
    this.props.dispatch(fetchPost(post_id));
    console.log("Now let's fetch this post:", post_id);
  }

  render() {
    const {post,comments = []} = this.props;

    return (
      <div>
        {post ? <div>
          <h1>{post.title}</h1>
          <ReactMarkdown source={post.content} />
        <h2>{comments.map(comment=>{
          return <li>{comment.text}</li>
        })}</h2>
        {/* <p>Like:{this.state.like} DisLike:{this.state.disLike}</p> */}
       <Like/>
        {/* <button onClick={goBack()}> Go back </button> */}
        </div> : <p>Loading...</p>}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState)
  return {
    post: reduxState.post.post,
    comments: reduxState.post.comments
  };
}

export default connect(mapStateToProps)(PostPage);
