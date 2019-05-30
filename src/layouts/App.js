import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

// components
import Header from '../modules/Header';
import Loading from '../components/Loading/Loading';
import HomePage from '../page/HomePage';

import routers from '../config/routers';
import AuthContextProvider from '../contexts/AuthContext';

// style
import '../assets/css/normalize.css';
import '../assets/css/App.css';

const AsyncMenuPage = Loadable({
  loader: () => import('../page/MenuPage' /* webpackChunkName: "menu-page" */),
  loading: Loading,
});
const AsyncMenuItemPage = Loadable({
  loader: () =>
    import('../page/MenuItemPage' /* webpackChunkName: "menu_item-page" */),
  loading: Loading,
});
const AsyncMenuAddItemPage = Loadable({
  loader: () =>
    import('../page/MenuAddItemPage' /* webpackChunkName: "menu_add_item-page" */),
  loading: Loading,
});
const AsyncOrderHistoryPage = Loadable({
  loader: () =>
    import('../page/OrderHistoryPage' /* webpackChunkName: "order_history-page" */),
  loading: Loading,
});
const AsyncContactPage = Loadable({
  loader: () =>
    import('../page/ContactPage' /* webpackChunkName: "contact-page" */),
  loading: Loading,
});
const AsyncDeliveryPage = Loadable({
  loader: () =>
    import('../page/DeliveryPage' /* webpackChunkName: "delivery-page" */),
  loading: Loading,
});
const AsyncAboutPage = Loadable({
  loader: () =>
    import('../page/AboutPage' /* webpackChunkName: "about-page" */),
  loading: Loading,
});
const AsyncAccountPage = Loadable({
  loader: () =>
    import('../page/AccountPage' /* webpackChunkName: "account-page" */),
  loading: Loading,
});
const AsyncPlannerPage = Loadable({
  loader: () =>
    import('../page/PlannerPage' /* webpackChunkName: "planner-page" */),
  loading: Loading,
});
const NotFound = () => <h1>Page Not Found</h1>;

const App = () => (
  <div className="app">
    <AuthContextProvider>
      <Header />
    </AuthContextProvider>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={routers.ABOUT} component={AsyncAboutPage} />
      <Route path={routers.CONTACT} component={AsyncContactPage} />
      <Route path={routers.DELIVERY} component={AsyncDeliveryPage} />
      <Route path={routers.ACCOUNT} component={AsyncAccountPage} />
      <Route path={routers.PLANNER} component={AsyncPlannerPage} />
      <Route exact path={routers.MENU.root} component={AsyncMenuPage} />
      <Route exact path={routers.MENU.add} component={AsyncMenuAddItemPage} />
      <Route path={routers.MENU.item} component={AsyncMenuItemPage} />
      <Route path={routers.ORDER_HISTORY} component={AsyncOrderHistoryPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
