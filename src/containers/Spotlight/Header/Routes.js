import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import Login from 'containers/Spotlight/Header/Login';
import ExplorePage from 'containers/Spotlight/Header/ExplorePage';
import PlanningPage from 'containers/Spotlight/Header/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Header/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Header/PersonalPage';
import EditPlanningPage from 'containers/Spotlight/Header/PlanningPage/EditPlanningPage';
import UpdatePlanningPage from 'containers/Spotlight/Header/PlanningPage/UpdatePlanningPage';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.login} component={Login} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.editPlanningPagePath} component={EditPlanningPage} />
      <Route exact path={routePathConfig.updatePlanningPagePath} component={UpdatePlanningPage} />
    </Switch>
  </Router>
);
