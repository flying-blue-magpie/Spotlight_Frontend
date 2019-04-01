import { createSelector } from 'reselect';
import { Map } from 'immutable';
import {
  KEY_REDUCER,
} from './constants';

const selectSpotlight = (state) => state.get(KEY_REDUCER);

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

export const selectLoginMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('loginMeta'),
);

export const selectUser = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('user'),
);

export const selectExploringSpotsResultIndex = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('exploringSpotsResultIndex'),
);

export const selectExploringSpot = () => createSelector(
  selectSpotlight,
  selectExploringSpotsResultIndex(),
  (spotlightState, exploringSpotsResultIndex) => {
    const index = String(spotlightState.get('spotsResult').get(exploringSpotsResultIndex));
    return spotlightState.getIn(['spots', index], Map());
  },
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
