import { createSelector } from 'reselect';
import { Map } from 'immutable';
import {
  KEY_REDUCER,
} from './constants';

const selectSpotlight = (state) => state.get(KEY_REDUCER);

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

export const selectExploringSpot = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.getIn(['spots', spotlightState.get('exploringSpotId')], Map()),
);

export const selectLoginStatusMeta = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('loginStatusMeta'),
);
