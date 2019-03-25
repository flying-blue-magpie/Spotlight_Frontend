import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import routePathConfig from 'containers/Spotlight/Content/Routes';

import Login from './Login'
// import ExplorePage from './ExplorePage'
import PlanningPage from './PlanningPage'
// import TravelWallPage from './TravelWallPage'
// import PersonalPage from './PersonalPage'

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} /> */}
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      {/* <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} /> */}
    </Switch>
  </Router>
);
