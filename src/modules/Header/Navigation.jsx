import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Navigation = ({ items }) => (
  <ul className={s.navigation}>
    {items.map(item => (
      <li key={item.name}>
        <NavLink
          to={item.path}
          className={s.link}
          activeClassName={s.linkActive}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
