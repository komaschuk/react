import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

const getMenuItemByCategories = async category => {
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

const addMenuItem = async item => {
  const response = await axios.post('/menu', item);
  return response.data;
};

export {
  getAllMenuItems,
  getCategories,
  getMenuItemByCategories,
  getMenuItemById,
  addMenuItem,
};
