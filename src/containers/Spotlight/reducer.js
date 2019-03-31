import { fromJS } from 'immutable';
import META, {
  updateMetaLoading,
  updateMetaDone,
  updateMetaError,
} from 'Provider/global/meta';
import {
  // SET_SPOT_LOADING,
  // SET_SPOT_DONE,
  SET_SPOTS_LOADING,
  SET_SPOTS_DONE,
  SET_LOGIN_LOADING,
  SET_LOGIN_DONE,
  SET_REGISTER_LOADING,
  SET_REGISTER_DONE,
  EXPLORE_NEXT_SPOT,
  SET_LOGIN_STATUS_LOADING,
  SET_LOGIN_STATUS_DONE,
} from './constants';

const initialState = fromJS({
  // setSpotMeta: META,
  setSpotsMeta: META,
  spots: [],
  loginMeta: META,
  registerMeta: META,
  loginStatusMeta: META,
  user: null,
  exploringSpotId: 0,
});

function spotLightReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_SPOT_LOADING:
    //   return state.update('setSpotMeta', updateMetaLoading);

    // case SET_SPOT_DONE: {
    //   const {
    //     error,
    //     // data, // get data from fetch epics
    //   } = action.payload;

    //   if (error) {
    //     return state.update('setSpotMeta', updateMetaError);
    //   }
    //   return state.update('setSpotMeta', updateMetaDone);
    // }

    case SET_SPOTS_LOADING:
      return state.update('setSpotsMeta', updateMetaLoading);

    case SET_SPOTS_DONE: {
      const {
        error,
        spots,
      } = action.payload;
      if (error) {
        return state.update('setSpotsMeta', updateMetaError);
      }
      return state
        .set('spots', fromJS(spots))
        .update('setSpotsMeta', updateMetaDone);
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

    case EXPLORE_NEXT_SPOT:
      return state.update('exploringSpotId', (id) => (id + 1) % state.get('spots').size);

    default:
      return state;
  }
}

export default spotLightReducer;
