import React from 'react';
import Input from '../../components/Input';
import s from './Menu.module.css';

const MenuFilter = ({ filter, onFilterChange }) => (
  <div className={s.filter}>
    <Input
      className={s.input}
      type="text"
      placeholder="Search"
      name={filter}
      value={filter}
      onChange={onFilterChange}
    />
  </div>
);

export default MenuFilter;
