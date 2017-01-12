import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/pages';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  // childRoutes: [
  //   { path: 'about', component: About },
  //   {
  //     path: 'inbox',
  //     component: Inbox,
  //     childRoutes: [{
  //       path: 'messages/:id',
  //       onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
  //     }]
  //   },
  //   {
  //     component: Inbox,
  //     childRoutes: [{
  //       path: 'messages/:id', component: Message
  //     }]
  //   }
  // ]
}

export default routes;