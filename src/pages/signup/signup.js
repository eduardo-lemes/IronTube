import React, { Component } from "react";
import api from "../../utils/api.util";
import './signup.css';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
// import PersonIcon from '@material-ui/icons/Person';
// import LockIcon from '@material-ui/icons/Lock';
// import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



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
        {this.state.message && <h2> {this.state.message}</h2>}
        <div className="containerSignup">
          <div className="forms-containerSignupSignup">
            <div className="signin-signupSignup">
              <form action="#" className="sign-up-formSignup">
                <h2 className="titleSignup">Sign up</h2>
               
                <div className="input-fieldSignup">
                  <i className="fas fa-user"></i>
                  <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInput}
                placeholder="Username" />
                </div>

                <div className="input-fieldSignup">
                  <i className="fas fa-user"></i>
                  <input
                type="text"
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleInput} 
                placeholder="Fullname" />
                </div>

                <div className="input-fieldSignup">
                  <i className="fas fa-envelope"></i>
                  <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}/>
                </div>

                <div className="input-fieldSignup">
                  <i className="fas fa-lock"></i>
                  <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  placeholder="Password" />
                </div>

              <button 
              className="btnSignup" 
              type="submit" 
              onClick={this.handleSubmit}>
                Signup
              </button>
      

                <p className="social-textSignup">Or Sign up with social platforms</p>
                
                <div className="social-mediaSignup">
                  <a href="https://www.facebook.com" className="social-iconSignup">
                    <i className="fab fa-facebook-f"></i>
                    <FacebookIcon />
                  </a>
                  <a href="https://www.twitter.com" className="social-iconSignup">
                    <i className="fab fa-twitter"></i>
                    <TwitterIcon/>
                  </a>
                  <a href="https://www.github.com" className="social-iconSignup">
                    <i className="fab fa-google-in"></i>
                    <GitHubIcon />
                  </a>
                  <a href="https://www.linkedin.com" className="social-iconSignup">
                    <i className="fab fa-linkedin-in"></i>
                    <LinkedInIcon />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="panels-containerSignup">
            <div className="panelSignup left-panelSignup">
              <div className="contentSignup">
                <h3>One of us ?</h3>
                <p>
                  Connect and come and have fun on our amazing platform!
                </p>
                <Link to={"/login"}><button className="btnSignup transparentSignup" id="sign-up-btn"><Button  name="login"></Button></button></Link>
              </div>
              <img src="img/register.svg" className="imageSignup" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
