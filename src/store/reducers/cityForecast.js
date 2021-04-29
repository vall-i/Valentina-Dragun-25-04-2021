import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/helpers';

const initialState = {
  locationOptions: [],
  firstEnter: true,
  currentLocation: { id: '215854', name: 'Tel Aviv' },
  currentCondition: null,
  forecast: [],
  temperatureType: localStorage.tempScale || 'Metric',
};

const setLocationOptions = (state, action) => {
  const updatedLocationOptions = action.locationOptions.map(location => ({
    value: location.Key,
    label: location.LocalizedName,
  }));
  return updateObject(state, { locationOptions: updatedLocationOptions });
};

const setLocation = (state, action) => {
  return updateObject(state, {
    locationOptions: [],
    firstEnter: false,
    currentLocation: {
      id: action.locationId,
      name: action.locationName,
    },
  });
};

const fetchLocationForecast = (state, action) => {
  return updateObject(state, {
    currentLocation: {
      id: action.currentCondition.locationId,
      name: action.currentCondition.cityName,
    },
    forecast: action.DailyForecasts,
    currentCondition: action.currentCondition,
  });
};

const toggleTempType = (state, action) => {
  const updatedTempType =
    state.temperatureType === 'Metric' ? 'Imperial' : 'Metric';
  localStorage.tempScale = updatedTempType;
  return updateObject(state, {
    temperatureType: updatedTempType,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION_OPTIONS:
      return setLocationOptions(state, action);
    case actionTypes.SET_LOCATION:
      return setLocation(state, action);
    case actionTypes.FETCH_LOCATION_FORECAST:
      return fetchLocationForecast(state, action);
    case actionTypes.TOGGLE_TEMPERATURE_TYPE:
      return toggleTempType(state, action);
    default:
      return state;
  }
};

export default reducer;
