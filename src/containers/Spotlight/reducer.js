import { fromJS, Map } from 'immutable';
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
} from './constants';

const initialState = fromJS({
  // setSpotMeta: META,
  setSpotsMeta: META,
  spots: [],
  loginMeta: META,
  user: null,
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
        return state.set('user', null);
      }
      return state
        .set('user', user && Map(user))
        .update('loginMeta', user === null ? updateMetaError : updateMetaDone);
    }

    default:
      return state;
  }
}

export default spotLightReducer;