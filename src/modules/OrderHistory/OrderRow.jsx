import React, { Fragment } from 'react';
import Button from '../../components/Button';
import b from '../../components/Button/Button.module.css';

const OrderRow = ({ date, price, address, rating, onDelete, onMoreInfo }) => (
  <Fragment>
    <td>{date}</td>
    <td>{price}$</td>
    <td>{address}</td>
    <td>{rating}/10</td>
    <td>
      <Button className={b.btn} type="button" onClick={onMoreInfo}>
        More Info
      </Button>
      <Button className={b.btnDelete} type="button" onClick={onDelete}>
        X
      </Button>
    </td>
  </Fragment>
);

export default OrderRow;
