import React, { Component } from "react";

class UploadVideo extends Component {
  render() {
    return <div>
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
          <button type="submit" onClick={this.handleSubmit}>Login</button>
        </form>
    </div>;
  }
}

export default UploadVideo;
