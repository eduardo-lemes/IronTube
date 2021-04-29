import React, { Component } from "react";
import api from "../utils/api.util";

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
    return <div>HOME video
    {this.state.videos.map(videos => {
        return <h2>{videos.title}</h2>
    })}</div>;
  }
}

export default HomeVideos;
