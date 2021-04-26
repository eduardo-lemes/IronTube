import React, { Component } from "react";

export class login extends Component {
  state = {
      username:'',
      passwordHash:'',
      
  };
  render() {
    return (
      <div> 
        <form>
          <label>Username</label>
          <input type='text' name='username' value={this.state.username}></input>
          <label type='text' name='passwordHash' value={this.state.passwordHash}>Password</label>
          <input></input>
        </form>
      </div>
    );
  }
}

export default login;
