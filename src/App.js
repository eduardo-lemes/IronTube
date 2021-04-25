import Navbar from "./components/Navbar";
import HomeVideos from "./pages/HomeVideos"
import UploadVideo from "./pages/UploadVideo"

import Signup from "./pages/signup"
import Login from "./pages/login"

import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={HomeVideos}/>
        <Route  path='/signup' component={Signup}/>
        <Route  path='/login' component={Login}/>
        <Route path='/upload' component={UploadVideo} />
        <Route />

      </Switch>
    </>
  );
}

export default App;
