import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Login from './Login';
import Page2 from 'containers/Spotlight/Content/Page2';

export const routePathConfig = {
  login: '/',
  page2Path: '/2',
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.login} component={Login} />
      <Route exact path={routePathConfig.page2Path} component={Page2} />
    </Switch>
  </Router>
);
