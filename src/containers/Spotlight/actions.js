import {
  FETCH_A_SPOT_BY_ID,
} from './constants';

export const fetchASpotById = (id) => ({
  type: FETCH_A_SPOT_BY_ID,
  payload: {
    id,
  },
});
