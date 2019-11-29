
import React, { Component } from "react";
import { connect } from "react-redux";
import signup from "../store/signup/actions";

class SignUpPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    verifyPassword: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("event", event);
    this.props.signup(this.state.name, this.state.email, this.state.password);
    //this.props.history.push('/developers')
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
      const passwordCheck = 
            (this.state.password === this.state.verifyPassword)
            && (this.state.password !== "")
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
        <p>Name: <br/>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>
          <p>E-mail: <br/>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>Password: <br/>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p> Verify password: <br/>
            <input
              type="password"
              name="verifyPassword"
              value={this.state.verifyPassword}
              onChange={this.handleChange}
            />
          </p>
          { !passwordCheck
          ? (<p>Please make sure your password matches</p>)
          : (<div>
                <p>Password verified!</p>
                <p>
                <button type="submit">Sign Up Now!</button>
                </p>
              </div>
            )
        }
        </form>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log("RS",reduxState)
  return {};
}


const mapDispatchToProps = {
  signup
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
