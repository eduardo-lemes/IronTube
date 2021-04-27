import React, { Component } from "react";
import api from "../utils/api.util";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    imageURL: "",
  };
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password, fullname, email } = this.state;
    try {
      await api.signup({
        username,
        password,
        fullname,
        email,
      });
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
      this.setState({
        message: "Error signup ",
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            ></input>
            <label>Real Name</label>
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleInput}
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            ></input>
            <label>Image</label>
            <input></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            ></input>
            <button type="submit" onClick={this.handleSubmit}>
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
