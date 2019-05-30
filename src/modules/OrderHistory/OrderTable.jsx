import React from 'react';
import OrderRow from './OrderRow';
import s from './OrderHistory.module.css';

const OrderTable = ({ items, onDelete, onMoreInfo }) => (
  <table className={s.table}>
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <OrderRow
            {...item}
            onDelete={() => onDelete(item.id)}
            onMoreInfo={() => onMoreInfo(item.id)}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderTable;
