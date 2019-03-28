import {
  // FETCH_SPOT_BY_ID,
  // SET_SPOT_LOADING,
  // SET_SPOT_DONE,
  FETCH_SPOTS,
  SET_SPOTS_LOADING,
  SET_SPOTS_DONE,
} from './constants';

// export const fetchSpotById = (id) => ({
//   type: FETCH_SPOT_BY_ID,
//   payload: {
//     id,
//   },
// });

// export const setSpotLoading = () => ({
//   type: SET_SPOT_LOADING,
// });

// export const setSpotDone = (error, data) => ({
//   type: SET_SPOT_DONE,
//   payload: {
//     error,
//     data,
//   },
// });

export const fetchSpots = () => ({
  type: FETCH_SPOTS,
});

export const setSpotsLoading = () => ({
  type: SET_SPOTS_LOADING,
});

export const setSpotsDone = (error, spots) => ({
  type: SET_SPOTS_DONE,
  payload: {
    error,
    spots,
  },
});
