import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import LoginPage from 'containers/Spotlight/Content/LoginPage';
import ExplorePage from 'containers/Spotlight/Content/ExplorePage';
import PlanningPage from 'containers/Spotlight/Content/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Content/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Content/PersonalPage';
import EditPlanningPage from 'containers/Spotlight/Content/PlanningPage/EditPlanningPage';
import UpdatePlanningPage from 'containers/Spotlight/Content/PlanningPage/UpdatePlanningPage';
import SpotPage from 'containers/Spotlight/Content/SpotPage';

export const routePathConfig = {
  login: '/',
  explorePagePath: `/${PAGE_NAME.EXPLORE}`,
  planningPagePath: `/${PAGE_NAME.PLANNING}`,
  travelWallPagePath: `/${PAGE_NAME.TRAVEL_WALL}`,
  personalPagePath: `/${PAGE_NAME.PERSONAL_PAGE}`,
  editPlanningPagePath: `/${PAGE_NAME.EDIT_PLANNING}/:projectId`,
  updatePlanningPagePath: `/${PAGE_NAME.UPDATE_PLANNING}`,
  spotPagePath: `/${PAGE_NAME.EXPLORE}/:spotId`,
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.login} component={LoginPage} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.editPlanningPagePath} component={EditPlanningPage} />
      <Route exact path={routePathConfig.updatePlanningPagePath} component={UpdatePlanningPage} />
      <Route exact path={routePathConfig.spotPagePath} component={SpotPage} />
    </Switch>
  </Router>
);
