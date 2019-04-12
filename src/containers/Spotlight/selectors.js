import { createSelector } from 'reselect';
import { Map } from 'immutable';
import {
  KEY_REDUCER,
} from './constants';

const selectSpotlight = (state) => state.get(KEY_REDUCER);

export const selectUserMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setUserMeta'),
);

export const selectUsersMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setUsersMeta'),
);

export const selectUsers = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('users'),
);

export const selectSpotMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setSpotMeta'),
);

export const selectSpotsMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setSpotsMeta'),
);

export const selectSpots = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('spots'),
);

export const selectRecSpotIds = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('recSpotsResult'),
);

export const selectProjects = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('projects'),
);

export const selectPublicProjects = () => createSelector(
  selectProjects(),
  (projects) => projects.filter((project) => project.get('is_public')).toList(),
);

export const selectProjectsByUserId = (id) => createSelector(
  selectProjects(),
  (projects) => projects.filter((project) => project.get('owner') === Number(id)).toList(),
);

export const selectLoginMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('loginMeta'),
);

export const selectUser = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('user'),
);

export const selectExploringSpotId = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('exploringSpotId'),
);

export const selectExploringSpot = () => createSelector(
  selectSpotlight,
  selectExploringSpotId(),
  (spotlightState, spotId) => spotlightState.getIn(['spots', String(spotId)], Map()),
);

export const selectLoginStatusMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('loginStatusMeta'),
);

export const selectOwnProjects = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('ownProjects'),
);

export const selectOwnProjectsMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('ownProjectsMeta'),
);

export const selectOwnProjectById = (id) => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('ownProjects')
    .find(
      (project) => project.get('proj_id') === Number(id),
    ),
);

export const selectFavoriteSpotIdsMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setFavoriteSpotIdsMeta'),
);

export const selectFavoriteSpotIds = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('favoriteSpotIds'),
);

export const selectFavoriteProjectIdsMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('setFavoriteProjectIdsMeta'),
);

export const selectFavoriteProjectIds = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('favoriteProjectIds'),
);

export const selectIsModalVisible = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('isModalVisible'),
);
