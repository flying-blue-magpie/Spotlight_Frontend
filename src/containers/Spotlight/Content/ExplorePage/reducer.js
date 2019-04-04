export const zoneReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ZONE':
      return state.setIn([action.payload.zone, 'selected'], true);
    case 'CANCEL_ZONE':
      return state.setIn([action.payload.zone, 'selected'], false);
    default:
      return state;
  }
};
