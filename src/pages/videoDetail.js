import React, { Component } from "react";
import api from "../utils/api.util";

class VideoDetail extends Component {
  state = {
    video: {},
  };

  componentDidMount = async () => {
    try {
      const videoDetail = await api.getVideoDetail(
        this.props.match.params.videoId
      );
      this.setState({ video: videoDetail });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        details video
        <h3> {this.state.video.title}</h3>
        <video type="video/mp4" src={this.state.video.videoURL}
          className="video-stream"
          x-webkit-airplay="allow"
          width="750"
          height="500"
          controls
        >
          {/* <source type="video/mp4" src={this.state.video.videoURL} /> */}
        </video>
        <h3> {this.state.video.description}</h3>
      </div>
    );
  }
}
export default VideoDetail;
