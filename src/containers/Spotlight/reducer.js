import { fromJS } from 'immutable';
const initialState = fromJS({

});

function spotLightReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default spotLightReducer;
