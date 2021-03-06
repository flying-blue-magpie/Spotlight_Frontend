import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import LoginPage from 'containers/Spotlight/Content/LoginPage';
import ExplorePage from 'containers/Spotlight/Content/ExplorePage';
import PlanningPage from 'containers/Spotlight/Content/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Content/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Content/PersonalPage';
import SettingPage from 'containers/Spotlight/Content/PersonalPage/SettingPage';
import DetailPlanningPage from 'containers/Spotlight/Content/PlanningPage/DetailPlanningPage';
import UpdatePlanningPage from 'containers/Spotlight/Content/PlanningPage/UpdatePlanningPage';
import CreateProjectPage from 'containers/Spotlight/Content/PlanningPage/CreateProjectPage';
import AddSpotToPlanPage from 'containers/Spotlight/Content/PlanningPage/AddSpotToPlanPage';
import SettingSpotCardPage from 'containers/Spotlight/Content/PlanningPage/SettingSpotCardPage';
import UpdatingSpotCardPage from 'containers/Spotlight/Content/PlanningPage/UpdatingSpotCardPage';
import EditPlanningDayPage from 'containers/Spotlight/Content/PlanningPage/EditPlanningDayPage';
import SpotPage from 'containers/Spotlight/Content/SpotPage';
import AddSpotToProjectPage from 'containers/Spotlight/Content/AddSpotToProjectPage';
import AddSpotToProjectPlanPage from 'containers/Spotlight/Content/AddSpotToProjectPlanPage';
import TravelerPage from 'containers/Spotlight/Content/TravelerPage';
import CreateSpotPage from 'containers/Spotlight/Content/CreateSpotPage';
import ArticlesPage from 'containers/Spotlight/Content/ArticlesPage';
import CommentPage from 'containers/Spotlight/Content/CommentPage';

export const routePathConfig = {
  loginPagePath: '/',
  explorePagePath: `/${PAGE_NAME.EXPLORE.name}`,
  planningPagePath: `/${PAGE_NAME.PLANNING.name}`,
  articlesPagePath: `/${PAGE_NAME.ARTICLES.name}`,
  travelWallPagePath: `/${PAGE_NAME.TRAVEL_WALL.name}`,
  personalPagePath: `/${PAGE_NAME.PERSONAL_PAGE.name}`,
  settingPath: `/${PAGE_NAME.SETTING.name}`,
  detailPlanningPagePath: `/${PAGE_NAME.DETAIL_PLANNING.name}/:projectId`,
  updatePlanningPagePath: `/${PAGE_NAME.UPDATE_PLANNING.name}/:projectId`,
  addSpotToPlanPagePath: `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/:projectId`,
  settingSpotCardPagePath: `/${PAGE_NAME.SETTING_SPOT_CARD.name}/:projectId`,
  updatingSpotCardPagePath: `/${PAGE_NAME.UPDATING_SPOT_CARD.name}/:projectId`,
  editPlanningDayPagePath: `/${PAGE_NAME.EDIT_PLANNING_DAY.name}/:projectId`,
  createProjectPagePath: `/${PAGE_NAME.CREATE_PROJECT.name}`,
  spotPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId`,
  addSpotToProjectPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}`,
  addSpotToProjectPlanPagePath: `/${PAGE_NAME.EXPLORE.name}/:spotId/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}/:projectId`,
  travelerPagePath: `/${PAGE_NAME.TRAVELER.name}/:userId`,
  createSpotPath: `/${PAGE_NAME.CREATE_SPOT.name}/:projectId`,
  commentPath: `/${PAGE_NAME.COMMENT.name}/:projectId`,
};

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.loginPagePath} component={LoginPage} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.articlesPagePath} component={ArticlesPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.settingPath} component={SettingPage} />
      <Route exact path={routePathConfig.detailPlanningPagePath} component={DetailPlanningPage} />
      <Route exact path={routePathConfig.updatePlanningPagePath} component={UpdatePlanningPage} />
      <Route exact path={routePathConfig.settingSpotCardPagePath} component={SettingSpotCardPage} />
      <Route exact path={routePathConfig.updatingSpotCardPagePath} component={UpdatingSpotCardPage} />
      <Route exact path={routePathConfig.editPlanningDayPagePath} component={EditPlanningDayPage} />
      <Route exact path={routePathConfig.addSpotToPlanPagePath} component={AddSpotToPlanPage} />
      <Route exact path={routePathConfig.createProjectPagePath} component={CreateProjectPage} />
      <Route exact path={routePathConfig.spotPagePath} component={SpotPage} />
      <Route exact path={routePathConfig.addSpotToProjectPagePath} component={AddSpotToProjectPage} />
      <Route exact path={routePathConfig.addSpotToProjectPlanPagePath} component={AddSpotToProjectPlanPage} />
      <Route exact path={routePathConfig.travelerPagePath} component={TravelerPage} />
      <Route exact path={routePathConfig.createSpotPath} component={CreateSpotPage} />
      <Route exact path={routePathConfig.commentPath} component={CommentPage} />
    </Switch>
  </Router>
);
