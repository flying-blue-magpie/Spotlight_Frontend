import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import LoginPage from 'containers/Spotlight/Header/LoginPage';
import ExplorePage from 'containers/Spotlight/Header/ExplorePage';
import PlanningPage from 'containers/Spotlight/Header/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Header/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Header/PersonalPage';
import DetailPlanningPage from 'containers/Spotlight/Header/PlanningPage/DetailPlanningPage';
import CreateProjectPage from 'containers/Spotlight/Header/PlanningPage/CreateProjectPage';
import SpotPage from 'containers/Spotlight/Header/SpotPage';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.login} component={LoginPage} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.detailPlanningPagePath} component={DetailPlanningPage} />
      <Route exact path={routePathConfig.createProjectPagePath} component={CreateProjectPage} />
      <Route exact path={routePathConfig.spotPagePath} component={SpotPage} />
    </Switch>
  </Router>
);
