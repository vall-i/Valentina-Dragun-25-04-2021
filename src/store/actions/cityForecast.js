import axios from 'axios';

import * as actionTypes from './actionTypes';

import { openErrorMessage } from '../../utilities/helpers';
import {
  getGeoposition,
  getLocationOptions,
  getCurrentCondition,
  getFiveDayForecast,
} from '../../utilities/services';

export const setLocation = (locationId, locationName) => {
  return {
    type: actionTypes.SET_LOCATION,
    locationId,
    locationName,
  };
};

export const setLocationOptions = locationOptions => {
  return {
    type: actionTypes.SET_LOCATION_OPTIONS,
    locationOptions: locationOptions,
  };
};

export const fetchCityForecastSuccess = (currentCondition, DailyForecasts) => {
  return {
    type: actionTypes.FETCH_LOCATION_FORECAST,
    currentCondition,
    DailyForecasts,
  };
};

export const toggleTempType = () => {
  return {
    type: actionTypes.TOGGLE_TEMPERATURE_TYPE,
  };
};

export const fetchGeoposition = () => {
  return async dispatch => {
    try {
      const data = await getGeoposition();

      if (data)
        dispatch(
          setLocation(data.ParentCity.Key, data.ParentCity.LocalizedName)
        );
    } catch (err) {
      openErrorMessage(err);
    }
  };
};

export const fetchLocationOptions = value => {
  return async dispatch => {
    try {
      const data = await getLocationOptions(value);

      if (data) dispatch(setLocationOptions(data));
    } catch (err) {
      openErrorMessage(err);
    }
  };
};

export const fetchCityForecast = (locationId, locationName) => {
  return async dispatch => {
    try {
      const [currentCondition, fiveDayForecast] = await axios.all([
        getCurrentCondition(locationId, locationName),
        getFiveDayForecast(locationId),
      ]);

      if (currentCondition && fiveDayForecast) {
        const { DailyForecasts } = fiveDayForecast;
        dispatch(fetchCityForecastSuccess(currentCondition, DailyForecasts));
      }
    } catch (err) {
      openErrorMessage(err);
    }
  };
};
