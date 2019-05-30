import React from 'react';

const Input = ({ className, type, placeholder, name, value, onChange }) => (
  <input
    className={className}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export default Input;
