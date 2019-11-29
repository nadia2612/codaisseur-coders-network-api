// src/components/LoginPage.js
import React, { Component } from "react";
import { connect } from "react-redux";
import login from "../store/login/action";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("event", event);
    this.props.login(this.state.email, this.state.password);
    this.props.history.push('/developers')
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log("PROPS",this.props)
    return (
      <div className="LogIn">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
          <p>
            <button type="submit">Login</button>
          </p>
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
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
