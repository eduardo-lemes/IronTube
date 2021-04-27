import React, { Component } from "react";
import api from "../utils/api.util";

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      await api.login({
        username,
        password,
      });
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      this.setState({
        message: "Error login ",
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.message && <h2> {this.state.message}</h2>}
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          ></input>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          ></input>
          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
