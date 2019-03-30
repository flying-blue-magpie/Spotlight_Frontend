import { createSelector } from 'reselect';
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

export const selectUser = () => createSelector(
  selectSpotlight,
  (spotlightState) => spotlightState.get('user'),
);
