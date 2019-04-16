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

  SET_USER_LOADING,
  SET_USER_DONE,
  SET_USERS_LOADING,
  SET_USERS_DONE,

  SET_USER_STATS_LOADING,
  SET_USER_STATS_DONE,

  SET_FAVORITE_SPOT_IDS_LOADING,
  SET_FAVORITE_SPOT_IDS_DONE,
  SET_FAVORITE_PROJECT_IDS_LOADING,
  SET_FAVORITE_PROJECT_IDS_DONE,
  SET_LIKE_SPOT_DONE,
  SET_EXPLORING_SPOT_ID,

  // modal
  SET_IS_MODAL_VISIBLE,
  ADD_FAVORITE_SPOT_ID,
  DELETE_FAVORITE_SPOT_ID,
  SET_CANCEL_LIKE_SPOT_DONE,
  ADD_FAVORITE_PROJECT_ID,
  DELETE_FAVORITE_PROJECT_ID,
  SET_LIKE_PROJECT_DONE,
  SET_CANCEL_LIKE_PROJECT_DONE,
  SET_REC_SPOTS_LOADING,
  SET_REC_SPOTS_DONE,
  SET_SEARCH_REC_SPOTS_LOADING,
  SET_SEARCH_REC_SPOTS_DONE,
  DELETE_PROJECT_BY_ID,
} from './constants';

const initialState = fromJS({
  setSpotMeta: META,
  setSpotsMeta: META,
  setRecSpotsMeta: META,
  setSearchRecSpotsMeta: META,
  spots: {},
  spotsResult: [],
  recSpotsResult: [],

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
  users: {},
  usersResult: [],
  setUserMeta: META,
  setUsersMeta: META,
  setUserStatsMeta: META,
  exploringSpotId: null,
  setFavoriteSpotIdsMeta: META,
  setFavoriteProjectIdsMeta: META,
  favoriteSpotIds: [],
  favoriteProjectIds: [],
});

function spotLightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOADING:
      return state.update('setUserMeta', updateMetaLoading);

    case SET_USER_DONE: {
      const {
        error,
        user,
      } = action.payload;

      if (error) {
        return state.update('setUserMeta', updateMetaError);
      }
      if (!user) { // handle user is undefined
        return state.update('setUserMeta', updateMetaDone);
      }
      return state
        .mergeDeepIn(['users'], fromJS({ [user.user_id]: user }))
        .update('setUserMeta', updateMetaDone);
    }

    case SET_USERS_LOADING:
      return state
        .update('setUsersMeta', updateMetaLoading);

    case SET_USERS_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('setUsersMeta', updateMetaError);
      }
      return state
        .mergeDeepIn(['users'], fromJS(entities.users))
        .set('usersResult', fromJS(result))
        .update('setUsersMeta', updateMetaDone)
        .set('exploringUserId', result[0]);
    }

    case SET_USER_STATS_LOADING:
      return state
        .update('setUserStatsMeta', updateMetaLoading);

    case SET_USER_STATS_DONE: {
      const {
        error,
        userId,
        stats,
      } = action.payload;
      if (error) {
        return state.update('setUserStatsMeta', updateMetaError);
      }
      return state
        .mergeDeepIn(['users', userId], fromJS({ stats }))
        .update('setUserStatsMeta', updateMetaDone);
    }

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
        .mergeIn(['spots'], fromJS({ [spot.spot_id]: spot }))
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
        .mergeIn(['spots'], fromJS(entities.spots))
        .set('spotsResult', fromJS(result))
        .update('setSpotsMeta', updateMetaDone)
        .set('exploringSpotId', result[0]);
    }

    case SET_REC_SPOTS_LOADING:
      return state
        .update('setRecSpotsMeta', updateMetaLoading);

    case SET_REC_SPOTS_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('setRecSpotsMeta', updateMetaError);
      }
      return state
        .mergeIn(['spots'], fromJS(entities.spots))
        .update(
          'recSpotsResult',
          (recSpotsResult) => result.reduce(
            (ids, id) => (ids.indexOf(id) !== -1 ? ids : ids.push(id)),
            recSpotsResult,
          ),
        )
        .update('setRecSpotsMeta', updateMetaDone);
    }

    case SET_SEARCH_REC_SPOTS_LOADING:
      return state
        .update('setSearchRecSpotsMeta', updateMetaLoading)
        .set('recSpotsResult', initialState.get('recSpotsResult'))
        .set('exploringSpotId', null);

    case SET_SEARCH_REC_SPOTS_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('setSearchRecSpotsMeta', updateMetaError);
      }
      return state
        .mergeIn(['spots'], fromJS(entities.spots))
        .update(
          'recSpotsResult',
          (recSpotsResult) => result.reduce(
            (ids, id) => (ids.indexOf(id) !== -1 ? ids : ids.push(id)),
            recSpotsResult,
          ),
        )
        .update('setSearchRecSpotsMeta', updateMetaDone)
        .update('exploringSpotId', (id) => (id === null ? result[0] : id));
    }

    case SET_PROJECT_LOADING:
      return state.update('setProjectMeta', updateMetaLoading);

    case SET_PROJECT_DONE: {
      const {
        error,
        entities,
        result,
      } = action.payload;

      if (error) {
        return state.update('setProjectMeta', updateMetaError);
      }
      if (!entities.projects) { // handle project is undefined
        return state.update('setProjectMeta', updateMetaDone);
      }
      return state
        .mergeIn(['projects'], fromJS(entities.projects))
        .update('projectsResult', (projectsResult) => (
          projectsResult.indexOf(result) !== -1
            ? projectsResult
            : projectsResult.push(result)
        ))
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
        .mergeIn(['projects'], fromJS(entities.projects))
        .set('projectsResult', fromJS(result))
        .update('setProjectsMeta', updateMetaDone);
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
        entities,
        result,
      } = action.payload;
      if (error) {
        return state.update('ownProjectsMeta', updateMetaError);
      }
      return state
        .mergeIn(['projects'], fromJS(entities.projects))
        .update(
          'projectsResult',
          (projectsResult) => result.reduce(
            (ids, id) => (ids.indexOf(id) !== -1 ? ids : ids.push(id)),
            projectsResult,
          ),
        )
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

    case DELETE_PROJECT_BY_ID:
      return state
        .deleteIn(['projects', String(action.payload.id)])
        .update(
          'projectsResult',
          (result) => result.filter((id) => id !== action.payload.id),
        );

    case SET_LIKE_SPOT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state
        .updateIn(['spots', String(id), 'like_num'], (likeNum) => likeNum + 1);
    }

    case SET_CANCEL_LIKE_SPOT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state.updateIn(['spots', String(id), 'like_num'], (likeNum) => likeNum - 1);
    }

    case SET_LIKE_PROJECT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state
        .updateIn(['projects', String(id), 'like_num'], (likeNum) => likeNum + 1);
    }

    case SET_CANCEL_LIKE_PROJECT_DONE: {
      const { error, id } = action.payload;
      if (error) {
        return state;
      }
      return state.updateIn(['projects', String(id), 'like_num'], (likeNum) => likeNum - 1);
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

    case SET_FAVORITE_PROJECT_IDS_LOADING:
      return state.update('setFavoriteProjectIdsMeta', updateMetaLoading);

    case SET_FAVORITE_PROJECT_IDS_DONE: {
      const { error, ids } = action.payload;
      if (error) {
        return state.update('setFavoriteProjectIdsMeta', updateMetaError);
      }
      return state
        .set('favoriteProjectIds', fromJS(ids))
        .update('setFavoriteProjectIdsMeta', updateMetaDone);
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

    case ADD_FAVORITE_PROJECT_ID:
      return state.update('favoriteProjectIds', (ids) => (
        ids.toSet().add(action.payload).toList()
      ));

    case DELETE_FAVORITE_PROJECT_ID:
      return state.update('favoriteProjectIds', (ids) => {
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
