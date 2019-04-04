import { schema, normalize } from 'normalizr';
import {
  FETCH_SPOT_BY_ID,
  SET_SPOT_LOADING,
  SET_SPOT_DONE,
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
  FETCH_OWN_PROJECTS,
  SET_OWN_PROJECTS_LOADING,
  SET_OWN_PROJECTS_DONE,
  SUBMIT_CREATE_PROJECT,
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_DONE,
  SUBMIT_DELETE_PROJECT,
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_DONE,
  LIKE_SPOT,
  SET_LIKE_SPOT_DONE,
  FETCH_FAVORITE_SPOT_IDS,
  SET_FAVORITE_SPOT_IDS_LOADING,
  SET_FAVORITE_SPOT_IDS_DONE,
} from './constants';

const spotSchema = new schema.Entity('spots', {}, { idAttribute: 'spot_id' });
const spotListSchema = new schema.Array(spotSchema);

export const fetchSpotById = (id) => ({
  type: FETCH_SPOT_BY_ID,
  payload: {
    id,
  },
});

export const setSpotLoading = () => ({
  type: SET_SPOT_LOADING,
});

export const setSpotDone = (error, spot) => ({
  type: SET_SPOT_DONE,
  payload: {
    error,
    spot,
  },
});

export const fetchSpots = ({ zones = [], kw = '' } = {}) => ({
  type: FETCH_SPOTS,
  payload: { zones, kw },
});

export const setSpotsLoading = () => ({
  type: SET_SPOTS_LOADING,
});

export const setSpotsDone = (error, spots) => ({
  type: SET_SPOTS_DONE,
  payload: {
    error,
    ...normalize(spots, spotListSchema),
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

export const fetchOwnProjects = () => ({
  type: FETCH_OWN_PROJECTS,
});

export const setOwnProjectsLoading = () => ({
  type: SET_OWN_PROJECTS_LOADING,
});

export const setOwnProjectsDone = (error, ownProjects) => ({
  type: SET_OWN_PROJECTS_DONE,
  payload: {
    error,
    ownProjects,
  },
});

export const submitCreateProject = (newProject) => ({
  type: SUBMIT_CREATE_PROJECT,
  payload: {
    newProject,
  },
});

export const createProjectLoading = () => ({
  type: CREATE_PROJECT_LOADING,
});

export const createProjectDone = (error, user) => ({
  type: CREATE_PROJECT_DONE,
  payload: {
    error,
    user,
  },
});

export const submitDeleteProject = (projectId) => ({
  type: SUBMIT_DELETE_PROJECT,
  payload: {
    projectId,
  },
});

export const deleteProjectLoading = () => ({
  type: DELETE_PROJECT_LOADING,
});

export const deleteProjectDone = (error) => ({
  type: DELETE_PROJECT_DONE,
  payload: {
    error,
  },
});

export const likeSpot = (id) => ({
  type: LIKE_SPOT,
  payload: id,
});

export const setLikeSpotDone = (error, id) => ({
  type: SET_LIKE_SPOT_DONE,
  payload: {
    error,
    id,
  },
});

export const fetchFavoriteSpotIds = () => ({
  type: FETCH_FAVORITE_SPOT_IDS,
});

export const setFavoriteSpotIdsLoading = () => ({
  type: SET_FAVORITE_SPOT_IDS_LOADING,
});

export const setFavoriteSpotIdsDone = (error, ids) => ({
  type: SET_FAVORITE_SPOT_IDS_DONE,
  payload: {
    error,
    ids,
  },
});
