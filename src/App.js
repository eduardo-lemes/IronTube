import Navbar from "./components/Navbar";
import HomeVideos from "./pages/HomeVideos";
import UploadVideo from "./pages/UploadVideo";
import { Component } from "react";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import VideoDetail from "./pages/videoDetail";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    loggedInUser: false,
  };

  handleLogin = (value) => {
    this.setState({
      loggedInUser: value,
    });
  };
  render() {
    return(
      <>
      <Navbar loggedInUser={this.state.loggedInUser}></Navbar>
      <Switch>
        <Route exact path="/" component={HomeVideos} />
        <Route path="/signup" component={Signup} />
        <Route path="/login"  render={(props) => <Login {...props} handleLogin={this.handleLogin} />}/>
        <Route path="/upload" component={UploadVideo} />
        <Route path="/view/:videoId" component={VideoDetail} />
      </Switch>
    </>
    )
    
  }
}

export default App;
