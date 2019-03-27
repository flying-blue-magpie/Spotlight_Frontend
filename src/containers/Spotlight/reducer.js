import { fromJS } from 'immutable';
import META, {
  updateMetaLoading,
  updateMetaDone,
  updateMetaError,
} from 'Provider/global/meta';
import {
  SET_SPOT_LOADING,
  SET_SPOT_DONE,
} from './constants';

const initialState = fromJS({
  setSpotMeta: META,
});

function spotLightReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPOT_LOADING:
      return state.update('setSpotMeta', updateMetaLoading);

    case SET_SPOT_DONE: {
      const {
        error,
        // data, // get data from fetch epics
      } = action.payload;
      if (error) {
        return state.update('setSpotMeta', updateMetaError);
      }
      return state.update('setSpotMeta', updateMetaDone);
    }

    default:
      return state;
  }
}

export default spotLightReducer;
