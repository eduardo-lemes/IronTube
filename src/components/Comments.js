import React, { Component } from "react";
import api from "../utils/api.util";

class Comments extends Component {
  state = {
    comments: [],
    comment: '',
    user: ''
  };

  loadComments = async () => {
    const comments = await api.getVideoComments(this.props.videoId);

    this.setState({
      comments: comments,
      user: localStorage.getItem('userId'),
    });
  };
  componentDidMount = () => {
    this.loadComments();
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = await api.createComment({
      comment: this.state.comment, video: this.props.videoId, user: this.state.user
    });
    this.setState({
      comment: "",
    });
    this.loadComments();
  };
  render() {
    return (
      <div>
        <form>
          <label>Comment </label>
          <input
            name="comment"
            type="text"
            value={this.state.comment}
            onChange={this.handleInput}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Comment Submit
          </button>
        </form>
        <ul>
          {this.state.comments.map((comments) => {
            return (
              <li>
                {comments.comment}
                <ul>{comments.username}</ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Comments;
