import planningIconPath from 'assets/NavIcons/planning_icon.svg';
import planningHoverIconPath from 'assets/NavIcons/planning_icon_hover.svg';

import exploreIconPath from 'assets/NavIcons/explore_icon.svg';
import exploreHoverIconPath from 'assets/NavIcons/explore_icon_hover.svg';

import travelWallIconPath from 'assets/NavIcons/travel_wall_icon.svg';
import travelWallHoverIconPath from 'assets/NavIcons/travel_wall_icon_hover.svg';

import personalIconPath from 'assets/NavIcons/personal_icon.svg';
import personalHoverIconPath from 'assets/NavIcons/personal_icon_hover.svg';


export const KEY_REDUCER = 'spotlight';
export const INIT = `${KEY_REDUCER}/INIT`;

export const FETCH_USER_BY_ID = `${KEY_REDUCER}/FETCH_USER_BY_ID`;
export const SET_USER_LOADING = `${KEY_REDUCER}/SET_USER_LOADING`;
export const SET_USER_DONE = `${KEY_REDUCER}/SET_USER_DONE`;

export const FETCH_USERS = `${KEY_REDUCER}/FETCH_USERS`;
export const SET_USERS_LOADING = `${KEY_REDUCER}/SET_USERS_LOADING`;
export const SET_USERS_DONE = `${KEY_REDUCER}/SET_USERS_DONE`;

export const FETCH_USER_STATS = `${KEY_REDUCER}/FETCH_USER_STATS`;
export const SET_USER_STATS_LOADING = `${KEY_REDUCER}/SET_USER_STATS_LOADING`;
export const SET_USER_STATS_DONE = `${KEY_REDUCER}/SET_USER_STATS_DONE`;

export const FETCH_SPOT_BY_ID = `${KEY_REDUCER}/FETCH_SPOT_BY_ID`;
export const SET_SPOT_LOADING = `${KEY_REDUCER}/SET_SPOT_LOADING`;
export const SET_SPOT_DONE = `${KEY_REDUCER}/SET_SPOT_DONE`;

export const FETCH_SPOTS = `${KEY_REDUCER}/FETCH_SPOTS`;
export const SET_SPOTS_LOADING = `${KEY_REDUCER}/SET_SPOTS_LOADING`;
export const SET_SPOTS_DONE = `${KEY_REDUCER}/SET_SPOTS_DONE`;

export const FETCH_REC_SPOTS = `${KEY_REDUCER}/FETCH_REC_SPOTS`;
export const SET_REC_SPOTS_LOADING = `${KEY_REDUCER}/SET_REC_SPOTS_LOADING`;
export const SET_REC_SPOTS_DONE = `${KEY_REDUCER}/SET_REC_SPOTS_DONE`;

export const SEARCH_REC_SPOTS = `${KEY_REDUCER}/SEARCH_REC_SPOTS`;
export const SET_SEARCH_REC_SPOTS_LOADING = `${KEY_REDUCER}/SET_SEARCH_REC_SPOTS_LOADING`;
export const SET_SEARCH_REC_SPOTS_DONE = `${KEY_REDUCER}/SET_SEARCH_REC_SPOTS_DONE`;

export const FETCH_PROJECT_BY_ID = `${KEY_REDUCER}/FETCH_PROJECT_BY_ID`;
export const SET_PROJECT_LOADING = `${KEY_REDUCER}/SET_PROJECT_LOADING`;
export const SET_PROJECT_DONE = `${KEY_REDUCER}/SET_PROJECT_DONE`;

export const FETCH_PROJECTS = `${KEY_REDUCER}/FETCH_PROJECTS`;
export const SET_PROJECTS_LOADING = `${KEY_REDUCER}/SET_PROJECTS_LOADING`;
export const SET_PROJECTS_DONE = `${KEY_REDUCER}/SET_PROJECTS_DONE`;

export const LOGIN = `${KEY_REDUCER}/LOGIN`;
export const SET_LOGIN_LOADING = `${KEY_REDUCER}/SET_LOGIN_LOADING`;
export const SET_LOGIN_DONE = `${KEY_REDUCER}/SET_LOGIN_DONE`;

export const LOGOUT = `${KEY_REDUCER}/LOGOUT`;
export const SET_LOGOUT_LOADING = `${KEY_REDUCER}/SET_LOGOUT_LOADING`;
export const SET_LOGOUT_DONE = `${KEY_REDUCER}/SET_LOGOUT_DONE`;

export const FETCH_LOGIN_STATUS = `${KEY_REDUCER}/FETCH_LOGIN_STATUS`;
export const SET_LOGIN_STATUS_LOADING = `${KEY_REDUCER}/SET_LOGIN_STATUS_LOADING`;
export const SET_LOGIN_STATUS_DONE = `${KEY_REDUCER}/SET_LOGIN_STATUS_DONE`;

export const REGISTER = `${KEY_REDUCER}/REGISTER`;
export const SET_REGISTER_LOADING = `${KEY_REDUCER}/SET_REGISTER_LOADING`;
export const SET_REGISTER_DONE = `${KEY_REDUCER}/SET_REGISTER_DONE`;

export const EXPLORE_NEXT_SPOT = `${KEY_REDUCER}/EXPLORE_NEXT_SPOT`;
export const SET_EXPLORING_SPOT_ID = `${KEY_REDUCER}/SET_EXPLORING_SPOT_ID`;

export const FETCH_OWN_PROJECTS = `${KEY_REDUCER}/FETCH_OWN_PROJECTS`;
export const SET_OWN_PROJECTS_LOADING = `${KEY_REDUCER}/SET_OWN_PROJECTS_LOADING`;
export const SET_OWN_PROJECTS_DONE = `${KEY_REDUCER}/SET_OWN_PROJECTS_DONE`;

export const SUBMIT_CREATE_PROJECT = `${KEY_REDUCER}/SUBMIT_CREATE_PROJECT`;
export const CREATE_PROJECT_LOADING = `${KEY_REDUCER}/CREATE_PROJECT_LOADING`;
export const CREATE_PROJECT_DONE = `${KEY_REDUCER}/CREATE_PROJECT_DONE`;

export const SUBMIT_UPDATE_PROJECT = `${KEY_REDUCER}/SUBMIT_UPDATE_PROJECT`;
export const UPDATE_PROJECT_LOADING = `${KEY_REDUCER}/UPDATE_PROJECT_LOADING`;
export const UPDATE_PROJECT_DONE = `${KEY_REDUCER}/UPDATE_PROJECT_DONE`;

export const SUBMIT_DELETE_PROJECT = `${KEY_REDUCER}/SUBMIT_DELETE_PROJECT`;
export const DELETE_PROJECT_LOADING = `${KEY_REDUCER}/DELETE_PROJECT_LOADING`;
export const DELETE_PROJECT_DONE = `${KEY_REDUCER}/DELETE_PROJECT_DONE`;
export const DELETE_PROJECT_BY_ID = `${KEY_REDUCER}/DELETE_PROJECT_BY_ID`;

export const LIKE_SPOT = `${KEY_REDUCER}/LIKE_SPOT`;
export const SET_LIKE_SPOT_DONE = `${KEY_REDUCER}/SET_LIKE_SPOT_DONE`;

export const CANCEL_LIKE_SPOT = `${KEY_REDUCER}/CANCEL_LIKE_SPOT`;
export const SET_CANCEL_LIKE_SPOT_DONE = `${KEY_REDUCER}/SET_CANCEL_LIKE_SPOT_DONE`;

export const LIKE_PROJECT = `${KEY_REDUCER}/LIKE_PROJECT`;
export const SET_LIKE_PROJECT_DONE = `${KEY_REDUCER}/SET_LIKE_PROJECT_DONE`;

export const CANCEL_LIKE_PROJECT = `${KEY_REDUCER}/CANCEL_LIKE_PROJECT`;
export const SET_CANCEL_LIKE_PROJECT_DONE = `${KEY_REDUCER}/SET_CANCEL_LIKE_PROJECT_DONE`;

export const FETCH_FAVORITE_SPOT_IDS = `${KEY_REDUCER}/FETCH_FAVORITE_SPOT_IDS`;
export const SET_FAVORITE_SPOT_IDS_LOADING = `${KEY_REDUCER}/SET_FAVORITE_SPOT_IDS_LOADING`;
export const SET_FAVORITE_SPOT_IDS_DONE = `${KEY_REDUCER}/SET_FAVORITE_SPOT_IDS_DONE`;

export const ADD_FAVORITE_SPOT_ID = `${KEY_REDUCER}/ADD_FAVORITE_SPOT_ID`;
export const DELETE_FAVORITE_SPOT_ID = `${KEY_REDUCER}/DELETE_FAVORITE_SPOT_ID`;

export const ADD_FAVORITE_PROJECT_ID = `${KEY_REDUCER}/ADD_FAVORITE_PROJECT_ID`;
export const DELETE_FAVORITE_PROJECT_ID = `${KEY_REDUCER}/DELETE_FAVORITE_PROJECT_ID`;

export const FETCH_FAVORITE_PROJECT_IDS = `${KEY_REDUCER}/FETCH_FAVORITE_PROJECT_IDS`;
export const SET_FAVORITE_PROJECT_IDS_LOADING = `${KEY_REDUCER}/SET_FAVORITE_PROJECT_IDS_LOADING`;
export const SET_FAVORITE_PROJECT_IDS_DONE = `${KEY_REDUCER}/SET_FAVORITE_PROJECT_IDS_DONE`;

export const SET_IS_MODAL_VISIBLE = `${KEY_REDUCER}/SET_IS_MODAL_VISIBLE`;

export const DEFAULT_PROJECT = {
  name: '',
  start_day: '', // format: 2018/12/01 00:00:00
  tot_days: 0,
};

export const DEFAULT_PLAN = {
  start_time: '08:00:00', // format: 08:00:00
  arrange: [],
};

export const DEFAULT_ARRANGE = {
  spot_id: null,
  during: 0,
};

export const NavIcon = {
  explore: {
    normal: exploreIconPath,
    hover: exploreHoverIconPath,
  },
  planning: {
    normal: planningIconPath,
    hover: planningHoverIconPath,
  },
  travelWall: {
    normal: travelWallIconPath,
    hover: travelWallHoverIconPath,
  },
  personal: {
    normal: personalIconPath,
    hover: personalHoverIconPath,
  },
};

export const WEEKDAYS = '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_');
export const WEEKDAYS_SHORT = '週日_週一_週二_週三_週四_週五_週六'.split('_');

export const HOURS = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23',
];

export const MINUTES = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '22', '22', '23', '24', '25', '26', '27', '28', '29',
  '30', '33', '32', '33', '34', '35', '36', '37', '38', '39',
  '40', '44', '42', '43', '44', '45', '46', '47', '48', '49',
  '50', '55', '52', '53', '54', '55', '56', '57', '58', '59',
];

export const REC_SPOTS_BUFFER_COUNT = 3;
