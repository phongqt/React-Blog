import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import {Home, Login} from './components/pages';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'login', component: Login }
  ]
}

export default routes;
