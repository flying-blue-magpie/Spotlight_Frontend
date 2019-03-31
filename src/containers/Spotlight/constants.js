export const KEY_REDUCER = 'spotlight';
export const INIT = `${KEY_REDUCER}/INIT`;

export const FETCH_SPOT_BY_ID = `${KEY_REDUCER}/FETCH_SPOT_BY_ID`;
export const SET_SPOT_LOADING = `${KEY_REDUCER}/SET_SPOT_LOADING`;
export const SET_SPOT_DONE = `${KEY_REDUCER}/SET_SPOT_DONE`;

export const FETCH_SPOTS = `${KEY_REDUCER}/FETCH_SPOTS`;
export const SET_SPOTS_LOADING = `${KEY_REDUCER}/SET_SPOTS_LOADING`;
export const SET_SPOTS_DONE = `${KEY_REDUCER}/SET_SPOTS_DONE`;

export const LOGIN = `${KEY_REDUCER}/LOGIN`;
export const SET_LOGIN_LOADING = `${KEY_REDUCER}/SET_LOGIN_LOADING`;
export const SET_LOGIN_DONE = `${KEY_REDUCER}/SET_LOGIN_DONE`;

export const FETCH_LOGIN_STATUS = `${KEY_REDUCER}/FETCH_LOGIN_STATUS`;
export const SET_LOGIN_STATUS_LOADING = `${KEY_REDUCER}/SET_LOGIN_STATUS_LOADING`;
export const SET_LOGIN_STATUS_DONE = `${KEY_REDUCER}/SET_LOGIN_STATUS_DONE`;

export const REGISTER = `${KEY_REDUCER}/REGISTER`;
export const SET_REGISTER_LOADING = `${KEY_REDUCER}/SET_REGISTER_LOADING`;
export const SET_REGISTER_DONE = `${KEY_REDUCER}/SET_REGISTER_DONE`;

export const EXPLORE_NEXT_SPOT = `${KEY_REDUCER}/EXPLORE_NEXT_SPOT`;

export const FETCH_OWN_PROJECTS = `${KEY_REDUCER}/FETCH_OWN_PROJECTS`;
export const SET_OWN_PROJECTS_LOADING = `${KEY_REDUCER}/SET_OWN_PROJECTS_LOADING`;
export const SET_OWN_PROJECTS_DONE = `${KEY_REDUCER}/SET_OWN_PROJECTS_DONE`;


export const DEFAULT_PROJECT = {
  name: '',
  start_day: '', // format: 2018/12/01 00:00:00
  end_day: '', // format: 2018/12/01 00:00:00
  plan: [],
};

export const DEFAULT_PLAN = {
  start_time: '', // format: 08:00:00
  arrange: [],
};

export const DEFAULT_ARRANGE = {
  spot_id: null,
  during: 0,
};
