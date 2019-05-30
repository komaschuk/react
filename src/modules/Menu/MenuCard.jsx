import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routers from '../../config/routers';
import s from './Menu.module.css';

const MenuCard = ({ location, id, image, name, price }) => (
  <Link
    to={{
      pathname: `${routers.MENU.root}/${id}`,
      state: { from: location },
    }}
    className={s.itemContent}
  >
    <div className={s.img} style={{ backgroundImage: `url(${image})` }} />
    <p className={s.name}>{name}</p>
    <p className={s.price}>Price: {price}$</p>
  </Link>
);

export default withRouter(MenuCard);
