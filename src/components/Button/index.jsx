import React from 'react';

const Button = ({ type, children, onClick, className }) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
