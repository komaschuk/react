import routers from './routers';

export default [
  {
    name: 'Menu',
    path: routers.MENU.root,
  },
  {
    name: 'About',
    path: routers.ABOUT,
  },
  {
    name: 'Contact',
    path: routers.CONTACT,
  },
  {
    name: 'Delivery',
    path: routers.DELIVERY,
  },
];
