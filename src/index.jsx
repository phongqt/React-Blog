import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import {Home, Login} from './components/pages';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
