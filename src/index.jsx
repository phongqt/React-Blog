import React from 'react';
import {render} from 'react-dom';
import {Router, Route. browserHistory} from 'react-router';
import App from './components/app';
import Home from './components/pages';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Home" component = {Home} />
    </Route>
  </Router>),
  document.getElementById('app')
);