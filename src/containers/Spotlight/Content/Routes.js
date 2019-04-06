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
import UpdatePlanningPage from 'containers/Spotlight/Content/PlanningPage/UpdatePlanningPage';
import CreateProjectPage from 'containers/Spotlight/Content/PlanningPage/CreateProjectPage';
import AddSpotToPlanPage from 'containers/Spotlight/Content/PlanningPage/AddSpotToPlanPage';
import SpotPage from 'containers/Spotlight/Content/SpotPage';
import AddSpotToProjectPage from 'containers/Spotlight/Content/AddSpotToProjectPage';
import AddSpotToProjectPlanPage from 'containers/Spotlight/Content/AddSpotToProjectPlanPage';

export const routePathConfig = {
  loginPagePath: '/',
  explorePagePath: `/${PAGE_NAME.EXPLORE.name}`,
  planningPagePath: `/${PAGE_NAME.PLANNING.name}`,
  travelWallPagePath: `/${PAGE_NAME.TRAVEL_WALL.name}`,
  personalPagePath: `/${PAGE_NAME.PERSONAL_PAGE.name}`,
  detailPlanningPagePath: `/${PAGE_NAME.DETAIL_PLANNING.name}/:projectId`,
  updatePlanningPagePath: `/${PAGE_NAME.UPDATE_PLANNING.name}/:projectId`,
  addSpotToPlanPagePath: `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/:projectId`,
  createProjectPagePath: `/${PAGE_NAME.CREATE_PROJECT.name}`,
  spotPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId`,
  addSpotToProjectPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}`,
  addSpotToProjectPlanPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}/:projectId`,
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.loginPagePath} component={LoginPage} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.detailPlanningPagePath} component={DetailPlanningPage} />
      <Route exact path={routePathConfig.updatePlanningPagePath} component={UpdatePlanningPage} />
      <Route exact path={routePathConfig.createProjectPagePath} component={CreateProjectPage} />
      <Route exact path={routePathConfig.addSpotToPlanPagePath} component={AddSpotToPlanPage} />
      <Route exact path={routePathConfig.spotPagePath} component={SpotPage} />
      <Route exact path={routePathConfig.addSpotToProjectPagePath} component={AddSpotToProjectPage} />
      <Route exact path={routePathConfig.addSpotToProjectPlanPagePath} component={AddSpotToProjectPlanPage} />
    </Switch>
  </Router>
);
