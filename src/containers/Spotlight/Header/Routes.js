import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';

import Login from './Login'

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);
