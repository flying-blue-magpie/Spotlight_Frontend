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
  LOGOUT,
  SET_LOGOUT_DONE,
  SET_LOGOUT_LOADING,
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

  // create project
  SUBMIT_CREATE_PROJECT,
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_DONE,

  // update project
  SUBMIT_UPDATE_PROJECT,
  UPDATE_PROJECT_LOADING,
  UPDATE_PROJECT_DONE,

  // delete project
  SUBMIT_DELETE_PROJECT,
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_DONE,

  CANCEL_LIKE_SPOT,
  SET_CANCEL_LIKE_SPOT_DONE,

  FETCH_PROJECT_BY_ID,
  SET_PROJECT_LOADING,
  SET_PROJECT_DONE,
  FETCH_PROJECTS,
  SET_PROJECTS_LOADING,
  SET_PROJECTS_DONE,

  LIKE_SPOT,
  SET_LIKE_SPOT_DONE,
  FETCH_FAVORITE_SPOT_IDS,
  SET_FAVORITE_SPOT_IDS_LOADING,
  SET_FAVORITE_SPOT_IDS_DONE,
  SET_EXPLORING_SPOT_ID,

  // modal
  SET_IS_MODAL_VISIBLE,
  ADD_FAVORITE_SPOT_ID,
  DELETE_FAVORITE_SPOT_ID,
} from './constants';

const spotSchema = new schema.Entity('spots', {}, { idAttribute: 'spot_id' });
const spotListSchema = new schema.Array(spotSchema);

const projectSchema = new schema.Entity('projects', {}, { idAttribute: 'proj_id' });
const projectListSchema = new schema.Array(projectSchema);

export const setIsModalVisible = (isVisible) => ({
  type: SET_IS_MODAL_VISIBLE,
  payload: {
    isVisible,
  },
});

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

export const fetchProjectById = (id) => ({
  type: FETCH_PROJECT_BY_ID,
  payload: {
    id,
  },
});

export const setProjectLoading = () => ({
  type: SET_PROJECT_LOADING,
});

export const setProjectDone = (error, spot) => ({
  type: SET_PROJECT_DONE,
  payload: {
    error,
    spot,
  },
});

export const fetchProjects = ({ owner, onlyPublic } = {}) => ({
  type: FETCH_PROJECTS,
  payload: { owner, onlyPublic },
});

export const setProjectsLoading = () => ({
  type: SET_PROJECTS_LOADING,
});

export const setProjectsDone = (error, projects) => ({
  type: SET_PROJECTS_DONE,
  payload: {
    error,
    ...normalize(projects, projectListSchema),
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

export const logout = () => ({
  type: LOGOUT,
});

export const setLogoutLoading = () => ({
  type: SET_LOGOUT_LOADING,
});

export const setLogoutDone = (error) => ({
  type: SET_LOGOUT_DONE,
  payload: {
    error,
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

export const setExploringSpotId = (id) => ({
  type: SET_EXPLORING_SPOT_ID,
  payload: id,
});

// fetch own project
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

// create project
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

// update project
export const submitUpdateProject = (projectId, updateProject) => ({
  type: SUBMIT_UPDATE_PROJECT,
  payload: {
    projectId,
    updateProject,
  },
});

export const updateProjectLoading = () => ({
  type: UPDATE_PROJECT_LOADING,
});

export const updateProjectDone = (error) => ({
  type: UPDATE_PROJECT_DONE,
  payload: {
    error,
  },
});

// delete project
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

export const cancelLikeSpot = (id) => ({
  type: CANCEL_LIKE_SPOT,
  payload: id,
});

export const setCancelLikeSpotDone = (error, id) => ({
  type: SET_CANCEL_LIKE_SPOT_DONE,
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

export const addFavoriteSpotId = (id) => ({
  type: ADD_FAVORITE_SPOT_ID,
  payload: id,
});

export const deleteFavoriteSpotId = (id) => ({
  type: DELETE_FAVORITE_SPOT_ID,
  payload: id,
});
