import React, { Component } from 'react';
import Rating from './Rating';
import Button from '../Button';

// styles
import b from '../Button/Button.module.css';
import s from './Comment.module.css';

const ratingOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

class CommentForm extends Component {
  state = {
    text: '',
    rate: ratingOptions[ratingOptions.length - 1],
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, rate } = this.state;

    const { onSubmit } = this.props;

    if (text === '') return;

    onSubmit({ text, rate });
    this.setState({ text: '', rate: ratingOptions[9] });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleRatingChange = e => {
    this.setState({
      rate: e.target.value,
    });
  };

  render() {
    const { text, rate } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <textarea
          className={s.textarea}
          name="text"
          value={text}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />

        <Rating
          options={ratingOptions}
          rate={rate}
          onChange={this.handleRatingChange}
        />
        <Button className={b.btn} type="submit">
          Comment
        </Button>
      </form>
    );
  }
}
export default CommentForm;
