import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api.util";
import RecommendedVideos from '../components/RecommendedVideos/RecommendedVideos';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';

class HomeVideos extends Component {
  state = {
    videos: [],
  };

  componentDidMount = async () => {
    const videos = await api.getAllVideos();
    this.setState({
      videos: videos,
    });
  };
  render() {
    return (
      <div>
        <Header loggedInUser={this.state.loggedInUser}></Header>
        <div className="app_page">
          <Sidebar  />
          <RecommendedVideos />
        </div>
        
        
        {this.state.videos.map((video) => {
          return <Link to={`/view/${video._id}`}> {video.title}</Link>;
        })}
      </div>
    );
  }
}

export default HomeVideos;
