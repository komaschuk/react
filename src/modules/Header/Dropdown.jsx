import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import s from './Header.module.css';

const Dropdown = ({ onSignOut, items }) => (
  <div className={s.dropdown}>
    <ul>
      {items.map(item => (
        <li>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <Button onClick={onSignOut} type="button">
      Logout
    </Button>
  </div>
);

export default Dropdown;
