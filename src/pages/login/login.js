import React, { Component } from "react";
import api from "../../utils/api.util";
import './login.css';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

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
      this.props.handleLogin(true);
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
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"><PersonIcon /></i>
                  <input
                  type="text" 
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
                  placeholder="Username" />
                </div>

                <div className="input-field">
                  <i className="fas fa-lock"><LockIcon /></i>
                  <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  placeholder="Password" />
                </div>

                <button type="submit" className="btn solid" onClick={this.handleSubmit}>Login</button>

                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="https://www.facebook.com" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                    <FacebookIcon />
                  </a>

                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-twitter"></i>
                    <TwitterIcon/>
                  </a>

                  <a href="https://www.github.com" className="social-icon">
                    <i className="fab fa-google-in"></i>
                    <GitHubIcon />
                  </a>

                  <a href="https://www.linkedin.com" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                    <LinkedInIcon />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Click on SIGNUP and become part of our community!</p>
                <Link to={"/signup"}><button className="btn transparent" id="sign-up-btn"><Button name="signup"></Button></button></Link>
              </div>
              <img src="img/log.svg" className="image" alt="" />
            </div>
          </div>
        </div>


        {/* <form>
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
        </form> */}
      </div>
    );
  }
}

export default Login;
