import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/helpers';

const initialState = {
  favorites: {},
  favoritesFullData: [],
};

const updateFavWeather = (state, action) => {
  return updateObject(state, { favoritesFullData: action.data });
};

const toggleFavLocation = (state, action) => {
  let updatedFavLocations = { ...state.favorites };
  if (state.favorites[action.location.id]) {
    delete updatedFavLocations[action.location.id];
  } else {
    updatedFavLocations = {
      ...updatedFavLocations,
      [action.location.id]: action.location.name,
    };
  }

  return updateObject(state, { favorites: updatedFavLocations });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FAVOURITES_WEATHER:
      return updateFavWeather(state, action);
    case actionTypes.TOGGLE_FAV_LOCATION:
      return toggleFavLocation(state, action);
    default:
      return state;
  }
};

export default reducer;
