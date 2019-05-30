import React, { Component } from 'react';
import v4 from 'uuid/v4';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class Comment extends Component {
  state = {
    comments: [],
  };

  handleAddComment = ({ text, rate }) => {
    this.setState(prevState => ({
      comments: [{ id: v4(), text, rate }, ...prevState.comments],
    }));
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <CommentList comments={comments} />
        <CommentForm onSubmit={this.handleAddComment} />
      </div>
    );
  }
}

export default Comment;
