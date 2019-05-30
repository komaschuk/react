import React from 'react';
import s from './Comment.module.css';

const Rating = ({ options, rate, onChange }) => (
  <select value={rate} onChange={onChange} className={s.rating}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default Rating;
