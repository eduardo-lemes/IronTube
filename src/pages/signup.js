import React, { Component } from "react";

export class signup extends Component {
  state = {
    username: "",
    passwordHash: "",
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
            <input type="text" name="email" value={this.state.email} onChange={this.handleInput}></input>
            <label>Image</label>
            <input></input>
            <label>Password</label>
            <input
              type="password"
              name="passwordHash"
              value={this.state.passwordHash}
              onChange={this.handleInput}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default signup;
