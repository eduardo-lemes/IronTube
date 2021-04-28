import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav style={styleNav}>
          <div>
            <Link to="/"><span style={{color:"white" }}>IronTube</span></Link>
          </div>
          {this.props.loggedInUser ? 
          (<Link to={"/upload"}><Button name="Upload Video"></Button></Link> )
          : 
          (<div style={styleDiv}>
            <Link to={"/signup"}><Button name="signup"></Button></Link>
            <Link to={"/login"}><Button name="login"></Button></Link>
            
          </div>) }
         
            
            
            
          
        </nav>
      </>
    );
  }
}

const styleNav = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#2196f3",
  
};
const styleDiv = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#2196f3",
};
export default Navbar;
