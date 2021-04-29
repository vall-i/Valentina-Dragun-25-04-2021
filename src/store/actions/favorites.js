import axios from 'axios';
import * as actionTypes from './actionTypes';

import { openErrorMessage } from '../../utilities/helpers';
import { getCurrentCondition } from '../../utilities/services';

export const toggleFavLocation = location => {
  return {
    type: actionTypes.TOGGLE_FAV_LOCATION,
    location,
  };
};

export const updateFavLocationWeather = data => {
  return {
    type: actionTypes.UPDATE_FAVOURITES_WEATHER,
    data,
  };
};

export const fetchFavLocationWeather = locations => {
  return async dispatch => {
    try {
      const locationsArr = Object.keys(locations);
      const data4ajax = locationsArr.reduce((dataForSent, location) => {
        return dataForSent.concat(
          getCurrentCondition(location, locations[location])
        );
      }, []);
      const data = await axios.all(data4ajax);

      if (data) dispatch(updateFavLocationWeather(data));
    } catch (err) {
      openErrorMessage(err);
    }
  };
};
