import React from 'react';
import s from './Comment.module.css';

const CommentList = ({ comments }) => (
  <div>
    <p className={s.title}>Comments</p>

    <ol className={s.list}>
      {comments.map(comment => (
        <li className={s.item} key={comment.id}>
          <span>{comment.text}</span>
          <span className={s.star}>{comment.rate}</span>
        </li>
      ))}
    </ol>
  </div>
);

export default CommentList;
