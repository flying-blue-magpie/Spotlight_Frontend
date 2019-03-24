import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Page1 from 'containers/Spotlight/Content/Page1';
import Page2 from 'containers/Spotlight/Content/Page2';

export const routePathConfig = {
  page1Path: '/1',
  page2Path: '/2',
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.page1Path} component={Page1} />
      <Route exact path={routePathConfig.page2Path} component={Page2} />
    </Switch>
  </Router>
);
