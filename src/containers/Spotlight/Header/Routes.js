import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import LoginPage from 'containers/Spotlight/Header/LoginPage';
import ExplorePage from 'containers/Spotlight/Header/ExplorePage';
import PlanningPage from 'containers/Spotlight/Header/PlanningPage';
import TravelWallPage from 'containers/Spotlight/Header/TravelWallPage';
import PersonalPage from 'containers/Spotlight/Header/PersonalPage';
import SettingPage from 'containers/Spotlight/Header/PersonalPage/SettingPage';
import SettingInfoPage from 'containers/Spotlight/Header/PersonalPage/SettingPage/SettingInfoPage';
import DetailPlanningPage from 'containers/Spotlight/Header/PlanningPage/DetailPlanningPage';
import UpdatePlanningPage from 'containers/Spotlight/Header/PlanningPage/UpdatePlanningPage';
import CreateProjectPage from 'containers/Spotlight/Header/PlanningPage/CreateProjectPage';
import AddSpotToProjectPage from 'containers/Spotlight/Header/AddSpotToProjectPage';
import AddSpotToProjectPlanPage from 'containers/Spotlight/Header/AddSpotToProjectPlanPage';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path={routePathConfig.loginPagePath} component={LoginPage} />
      <Route exact path={routePathConfig.explorePagePath} component={ExplorePage} />
      <Route exact path={routePathConfig.planningPagePath} component={PlanningPage} />
      <Route exact path={routePathConfig.travelWallPagePath} component={TravelWallPage} />
      <Route exact path={routePathConfig.personalPagePath} component={PersonalPage} />
      <Route exact path={routePathConfig.settingPath} component={SettingPage} />
      <Route exact path={routePathConfig.settingInfoPath} component={SettingInfoPage} />
      <Route exact path={routePathConfig.detailPlanningPagePath} component={DetailPlanningPage} />
      <Route exact path={routePathConfig.updatePlanningPagePath} component={UpdatePlanningPage} />
      <Route exact path={routePathConfig.createProjectPagePath} component={CreateProjectPage} />
      <Route exact path={routePathConfig.addSpotToProjectPagePath} component={AddSpotToProjectPage} />
      <Route exact path={routePathConfig.addSpotToProjectPlanPagePath} component={AddSpotToProjectPlanPage} />
    </Switch>
  </Router>
);
