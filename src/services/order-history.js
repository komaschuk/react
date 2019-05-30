import axios from 'axios';

const BASE_URL = 'http://localhost:3001/order-history';

const getAllOrderItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getOrderItemById = id =>
  axios
    .get(`${BASE_URL}/${id}`)
    .then(response => JSON.stringify(response.data, null, 2));

const removeOrderItemById = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addOrderItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export {
  getAllOrderItems,
  getOrderItemById,
  removeOrderItemById,
  addOrderItem,
};
