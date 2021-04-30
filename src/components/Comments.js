import React, { Component } from "react";
import api from "../utils/api.util";

class Comments extends Component {
  state = {
    comments: [],
  };

  loadComments = async () => {
    const comments = await api.getVideoComments(this.props.videoId);

    this.setState({
      comments: comments,
      user: "",
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
      comments: this.state.comments,
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
                <ul>{comments.user}</ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Comments;
