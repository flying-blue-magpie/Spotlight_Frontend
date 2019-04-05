import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import LoginPage from 'containers/Spotlight/Content/LoginPage';
import ExplorePage from 'containers/Spotlight/Content/ExplorePage';
import PlanningPage from 'containers/Spotlight/Content/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Content/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Content/PersonalPage';
import DetailPlanningPage from 'containers/Spotlight/Content/PlanningPage/DetailPlanningPage';
import CreateProjectPage from 'containers/Spotlight/Content/PlanningPage/CreateProjectPage';
import SpotPage from 'containers/Spotlight/Content/SpotPage';
import AddSpotToProjectPage from 'containers/Spotlight/Content/AddSpotToProjectPage';

export const routePathConfig = {
  login: '/',
  explorePagePath: `/${PAGE_NAME.EXPLORE}`,
  planningPagePath: `/${PAGE_NAME.PLANNING}`,
  travelWallPagePath: `/${PAGE_NAME.TRAVEL_WALL}`,
  personalPagePath: `/${PAGE_NAME.PERSONAL_PAGE}`,
  detailPlanningPagePath: `/${PAGE_NAME.DETAIL_PLANNING}/:projectId`,
  createProjectPagePath: `/${PAGE_NAME.CREATE_PROJECT}`,
  spotPagePath: `/${PAGE_NAME.EXPLORE}/:spotId`,
  addSpotToProjectPagePath: `/${PAGE_NAME.EXPLORE}/:spotId/${PAGE_NAME.ADD_SPOT_TO_PROJECT}`,
};

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
      <Route exact path={routePathConfig.addSpotToProjectPagePath} component={AddSpotToProjectPage} />
    </Switch>
  </Router>
);
