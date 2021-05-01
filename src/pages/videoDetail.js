import React, { Component } from "react";
import api from "../utils/api.util";
import Comments from "../components/Comments";
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';



class VideoDetail extends Component {
  state = {
    video: {_id: '608a035352c19c0015246037'},
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
        <Header loggedInUser={this.state.loggedInUser}></Header>

        <div className="app_page">
          <Sidebar  />
          <video
          type="video/mp4"
          src={this.state.video.videoURL}
          className="video-stream"
          x-webkit-airplay="allow"
          width="750"
          height="500"
          controls
        >
          <h3> {this.state.video.description}</h3>
        <div>
          <Comments videoId={this.state.video._id} />
        </div>
          {/* <source type="video/mp4" src={this.state.video.videoURL} /> */}
        </video>
        <h3> {this.state.video.description}</h3>
        <div>
          <Comments videoId={this.state.video._id} />
        </div>
        </div>
      </div>
    );
  }
}
export default VideoDetail;
