import React, { Component } from "react";
import { connect } from "react-redux";
import fetchPosts from "../store/postsList/actions";
import { Link } from "react-router-dom";

export class PostsList extends Component {
  state = { searchInput: "", search: "" };

  componentDidMount() {
    console.log("cdm", this.props);
    this.props.dispatch(fetchPosts());
    console.log("cdm2", this.props);
  }


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
    const loading = !this.props.posts.rows;
console.log(this.prop)
    return (
      <div>
        <h1>Posts</h1>
        <form onSubmit={this.submitForm}>
          <label>Search :</label>
          <input
            placeholder={"Search"}
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button type="submit">Search!</button>
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {this.props.posts.count} posts!</p>
            {this.props.posts.rows.filter(post=>{
              return(post.title.toLowerCase().includes(this.state.search.toLowerCase()))
            })
            .map(post => {
              return <Link to={`/read/${post.id}`}><p>{post.title}</p></Link>;
            })}
            
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  console.log("STATERED", reduxState)
  return {
    posts: reduxState.posts
  };
};

export default connect(mapStateToProps)(PostsList);
