import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/helpers';

const initialState = {
  appMode: localStorage.appMode || 'light',
};

const toggleAppMode = (state, action) => {
  const updatedMode = state.appMode === 'light' ? 'dark' : 'light';
  localStorage.appMode = updatedMode;
  return updateObject(state, {
    appMode: updatedMode,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_APP_MODE:
      return toggleAppMode(state, action);
    default:
      return state;
  }
};

export default reducer;
