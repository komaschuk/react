import React from 'react';
import MenuCard from './MenuCard';
import s from './Menu.module.css';

const MenuList = ({ items }) => (
  <ul className={s.list}>
    {items.map(item => (
      <li className={s.item} key={item.id}>
        <MenuCard
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      </li>
    ))}
  </ul>
);

export default MenuList;
