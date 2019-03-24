import { combineReducers } from 'redux-immutable';
import spotlightReducer from 'containers/Spotlight/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        spotlight: spotlightReducer,
    });
};
