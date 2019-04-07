import { fromJS } from 'immutable';
import META, {
  updateMetaLoading,
  updateMetaDone,
  updateMetaError,
} from 'Provider/global/meta';
import {
  SET_SPOT_LOADING,
  SET_SPOT_DONE,
  SET_SPOTS_LOADING,
  SET_SPOTS_DONE,
  SET_PROJECT_LOADING,
  SET_PROJECT_DONE,
  SET_PROJECTS_LOADING,
  SET_PROJECTS_DONE,
  SET_LOGIN_LOADING,
  SET_LOGIN_DONE,
  SET_LOGOUT_DONE,
  SET_LOGOUT_LOADING,
  SET_REGISTER_LOADING,
  SET_REGISTER_DONE,
  SET_LOGIN_STATUS_LOADING,
  SET_LOGIN_STATUS_DONE,

  SET_OWN_PROJECTS_LOADING,
  SET_OWN_PROJECTS_DONE,

  // create project
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_DONE,

  // update project
  UPDATE_PROJECT_LOADING,
  UPDATE_PROJECT_DONE,

  // delete project
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_DONE,

  SET_FAVORITE_SPOT_IDS_LOADING,
  SET_LIKE_SPOT_DONE,
  SET_FAVORITE_SPOT_IDS_DONE,
  SET_EXPLORING_SPOT_ID,

  // modal
  SET_IS_MODAL_VISIBLE,
  ADD_FAVORITE_SPOT_ID,
  DELETE_FAVORITE_SPOT_ID,
  SET_CANCEL_LIKE_SPOT_DONE,
} from './constants';

const initialState = fromJS({
  setSpotMeta: META,
  setSpotsMeta: META,
  spots: {},
  spotsResult: [],

  setProjectMeta: META,
  setProjectsMeta: META,
  projects: {},
  projectsResult: [],

  loginMeta: META,
  logoutMeta: META,
  registerMeta: META,
  loginStatusMeta: META,
  ownProjectsMeta: META,
  createProjectMeta: META,
  updateProjectMeta: META,
  deleteProjectMeta: META,

  // modal
  isModalVisible: false,

  user: null,
  ownProjects: [],
  exploringSpotId: 0,
  setFavoriteSpotIdsMeta: META,
  favoriteSpotIds: [],
});

function spotLightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOT_LOADING:
      return state.update('setSpotMeta', updateMetaLoading);

    case SET_SPOT_DONE: {
      const {
        error,
        spot,
      } = action.payload;

      if (error) {
        return state.update('setSpotMeta', updateMetaError);
      }
      if (!spot) { // handle spot is undefined
        return state.update('setSpotMeta', updateMetaDone);
      }
      return state
        .mergeDeepIn(['spots', spot.spot_id], fromJS(spot))
        .update('setSpotMeta', updateMetaDone);
    }

    case SET_SPOTS_LOADING:
      return state
        .update('setSpotsMeta', updateMetaLoading);

    case SET_SPOTS_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('setSpotsMeta', updateMetaError);
      }
      return state
        .mergeDeepIn(['spots'], fromJS(entities.spots))
        .set('spotsResult', fromJS(result))
        .update('setSpotsMeta', updateMetaDone)
        .set('exploringSpotId', result[0]);
    }

    case SET_PROJECT_LOADING:
      return state.update('setProjectMeta', updateMetaLoading);

    case SET_PROJECT_DONE: {
      const {
        error,
        project,
      } = action.payload;

      if (error) {
        return state.update('setProjectMeta', updateMetaError);
      }
      if (!project) { // handle project is undefined
        return state.update('setProjectMeta', updateMetaDone);
      }
      return state
        .mergeDeepIn(['projects', project.project_id], fromJS(project))
        .update('setProjectMeta', updateMetaDone);
    }

    case SET_PROJECTS_LOADING:
      return state
        .update('setProjectsMeta', updateMetaLoading);

    case SET_PROJECTS_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('setProjectsMeta', updateMetaError);
      }
      return state
        .mergeDeepIn(['projects'], fromJS(entities.projects))
        .set('projectsResult', fromJS(result))
        .update('setProjectsMeta', updateMetaDone)
        .set('exploringProjectId', result[0]);
    }

    case SET_LOGIN_LOADING:
      return state.update('loginMeta', updateMetaLoading);

    case SET_LOGIN_DONE: {
      const {
        error,
        user,
      } = action.payload;
      if (error) {
        return state.set('user', null)
          .update('loginMeta', updateMetaError);
      }
      return state
        .set('user', user && fromJS(user))
        .update('loginMeta', user === null ? updateMetaError : updateMetaDone);
    }

    case SET_LOGOUT_LOADING:
      return state.update('logoutMeta', updateMetaLoading);

    case SET_LOGOUT_DONE: {
      const { error } = action.payload;
      if (error) {
        return state.update('logoutMeta', updateMetaError);
      }
      return state
        .set('user', null)
        .update('logoutMeta', updateMetaDone);
    }

    case SET_REGISTER_LOADING:
      return state.update('registerMeta', updateMetaLoading);

    case SET_REGISTER_DONE: {
      const {
        error,
        user,
      } = action.payload;
      if (error) {
        return state.set('user', null)
          .update('registerMeta', updateMetaError);
      }
      return state
        .set('user', user && fromJS(user))
        .update('registerMeta', user === null ? updateMetaError : updateMetaDone);
    }

    case SET_LOGIN_STATUS_LOADING:
      return state.update('loginStatusMeta', updateMetaLoading);

    case SET_LOGIN_STATUS_DONE: {
      const {
        error,
        user,
      } = action.payload;
      if (error) {
        return state.set('user', null)
          .update('loginStatusMeta', updateMetaError);
      }
      return state
        .set('user', user && fromJS(user))
        .update('loginStatusMeta', updateMetaDone);
    }

    case SET_EXPLORING_SPOT_ID:
      return state.set('exploringSpotId', action.payload);

    case SET_OWN_PROJECTS_LOADING:
      return state.update('ownProjectsMeta', updateMetaLoading);

    case SET_OWN_PROJECTS_DONE: {
      const {
        error,
        ownProjects,
      } = action.payload;
      if (error) {
        return state.update('ownProjectsMeta', updateMetaError);
      }
      return state
        .set('ownProjects', fromJS(ownProjects))
        .update('ownProjectsMeta', updateMetaDone);
    }

    // create project
    case CREATE_PROJECT_LOADING:
      return state.update('createProjectMeta', updateMetaLoading);

    case CREATE_PROJECT_DONE: {
      const {
        error,
      } = action.payload;
      if (error) {
        return state.update('createProjectMeta', updateMetaError);
      }
      return state
        .update('createProjectMeta', updateMetaDone);
    }

    // update project
    case UPDATE_PROJECT_LOADING:
      return state.update('updateProjectMeta', updateMetaLoading);

    case UPDATE_PROJECT_DONE: {
      const {
        error,
      } = action.payload;
      if (error) {
        return state.update('updateProjectMeta', updateMetaError);
      }
      return state
        .update('updateProjectMeta', updateMetaDone)
        .set('isModalVisible', false);
    }

    // delete project
    case DELETE_PROJECT_LOADING:
      return state.update('deleteProjectMeta', updateMetaLoading);

    case DELETE_PROJECT_DONE: {
      const {
        error,
      } = action.payload;
      if (error) {
        return state.update('deleteProjectMeta', updateMetaError);
      }
      return state
        .update('deleteProjectMeta', updateMetaDone);
    }

    case SET_LIKE_SPOT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state
        .updateIn(['spots', id, 'like_num'], (likeNum) => likeNum + 1);
    }

    case SET_CANCEL_LIKE_SPOT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state.updateIn(['spots', id, 'like_num'], (likeNum) => likeNum - 1);
    }

    case SET_FAVORITE_SPOT_IDS_LOADING:
      return state.update('setFavoriteSpotIdsMeta', updateMetaLoading);

    case SET_FAVORITE_SPOT_IDS_DONE: {
      const { error, ids } = action.payload;
      if (error) {
        return state.update('setFavoriteSpotIdsMeta', updateMetaError);
      }
      return state
        .set('favoriteSpotIds', fromJS(ids))
        .update('setFavoriteSpotIdsMeta', updateMetaDone);
    }

    // modal
    case SET_IS_MODAL_VISIBLE: {
      const {
        isVisible,
      } = action.payload;
      return state.set('isModalVisible', isVisible);
    }

    case ADD_FAVORITE_SPOT_ID:
      return state.update('favoriteSpotIds', (ids) => (
        ids.toSet().add(action.payload).toList()
      ));

    case DELETE_FAVORITE_SPOT_ID:
      return state.update('favoriteSpotIds', (ids) => {
        const index = ids.indexOf(action.payload);
        if (index !== -1) {
          return ids.delete(index);
        }
        return ids;
      });

    default:
      return state;
  }
}

export default spotLightReducer;
