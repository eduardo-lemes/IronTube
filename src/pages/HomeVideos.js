import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    return (
      <div>
        HOME video
        {this.state.videos.map((video) => {
          return <Link to={`/view/${video._id}`}> {video.title}</Link>;
        })}
      </div>
    );
  }
}

export default HomeVideos;
