import React, { Component } from "react";

export class login extends Component {
  state = {
    username: "",
    passwordHash: "",
  };

  handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  };
  render() {
    return (
      <div>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          ></input>
          <label
            type="password"
            name="passwordHash"
            value={this.state.passwordHash}
          >
            Password
          </label>
          <input></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default login;
