import {
  // FETCH_SPOT_BY_ID,
  // SET_SPOT_LOADING,
  // SET_SPOT_DONE,
  FETCH_SPOTS,
  SET_SPOTS_LOADING,
  SET_SPOTS_DONE,
  LOGIN,
  SET_LOGIN_DONE,
  SET_LOGIN_LOADING,
  REGISTER,
  SET_REGISTER_DONE,
  SET_REGISTER_LOADING,
  EXPLORE_NEXT_SPOT,
  FETCH_LOGIN_STATUS,
  SET_LOGIN_STATUS_LOADING,
  SET_LOGIN_STATUS_DONE,
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

export const login = ({ acc = 'admin', pwd = 'admin' }) => ({
  type: LOGIN,
  payload: {
    acc,
    pwd,
  },
});

export const setLoginLoading = () => ({
  type: SET_LOGIN_LOADING,
});

export const setLoginDone = (error, user) => ({
  type: SET_LOGIN_DONE,
  payload: {
    error,
    user,
  },
});

export const register = ({ acc = 'admin', pwd = 'admin' }) => ({
  type: REGISTER,
  payload: {
    acc,
    pwd,
  },
});

export const setRegisterLoading = () => ({
  type: SET_REGISTER_LOADING,
});

export const setRegisterDone = (error, user) => ({
  type: SET_REGISTER_DONE,
  payload: {
    error,
    user,
  },
});

export const fetchLoginStatus = () => ({
  type: FETCH_LOGIN_STATUS,
});

export const setLoginStatusLoading = () => ({
  type: SET_LOGIN_STATUS_LOADING,
});

export const setLoginStatusDone = (error, user) => ({
  type: SET_LOGIN_STATUS_DONE,
  payload: {
    error,
    user,
  },
});

export const exploreNextSpot = () => ({
  type: EXPLORE_NEXT_SPOT,
});
