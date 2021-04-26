import React, { Component } from "react";

export class signup extends Component {
    state = {
        username:'',
        passwordHash:'',
        fullname:'',
        email: "",
        imageURL: "",
  
    };
  render() {
    return <div>
    <div> 
        <form>
          <label>Username</label>
          <input type='text' name='username' value={this.state.username}></input>
          <label>Real Name</label>
          <input type='text' name='fullname' value={this.state.fullname}></input>
          <label type='text' name='email' value={this.state.email}>Email</label>
          <input></input>
          <label>Image</label>
          <input></input>
          <label type='text' name='passwordHash' value={this.state.passwordHash}>Password</label>
          <input></input>
        </form>
      </div></div>;
  }
}

export default signup;
