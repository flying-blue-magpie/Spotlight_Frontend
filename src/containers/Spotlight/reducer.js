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
  SET_LOGIN_LOADING,
  SET_LOGIN_DONE,
  SET_REGISTER_LOADING,
  SET_REGISTER_DONE,
  SET_LOGIN_STATUS_LOADING,
  SET_LOGIN_STATUS_DONE,

  SET_OWN_PROJECTS_LOADING,
  SET_OWN_PROJECTS_DONE,
  CREATE_PROJECT_LOADING,
  CREATE_PROJECT_DONE,

  // delete project
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_DONE,

  SET_FAVORITE_SPOT_IDS_LOADING,
  SET_LIKE_SPOT_DONE,
  SET_FAVORITE_SPOT_IDS_DONE,
  SET_EXPLORING_SPOT_ID,
} from './constants';

const initialState = fromJS({
  setSpotMeta: META,
  setSpotsMeta: META,
  spots: {},
  spotsResult: [],
  loginMeta: META,
  registerMeta: META,
  loginStatusMeta: META,
  ownProjectsMeta: META,
  createProjectMeta: META,
  deleteProjectMeta: META,
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
        .updateIn(['spots', String(id), 'like_num'], (likeNum) => likeNum + 1);
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
        .update('setFavoriteSpotIdsMeta', updateMetaError);
    }

    default:
      return state;
  }
}

export default spotLightReducer;
