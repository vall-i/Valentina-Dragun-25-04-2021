import axios from 'axios';

import { openErrorMessage } from './helpers';
import { apikey } from '../utilities/constants';

export const getUserGeoposition = () => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      location => {
        resolve(location.coords);
      },
      error => {
        resolve(error);
      }
    );
  });
};

export const getGeoposition = async () => {
  try {
    const coords = await getUserGeoposition();
    const { latitude, longitude } = coords;
    const { data } = await axios.get(
      `/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${latitude},${longitude}`
    );

    if (data) return data;
  } catch (err) {
    openErrorMessage(err);
  }
};

export const getLocationOptions = async value => {
  const { data } = await axios.get(
    `/locations/v1/cities/autocomplete?apikey=${apikey}&q=${value}&language=en-us`
  );

  if (data) return data;
};

export const getCurrentCondition = async (locationId, cityName) => {
  try {
    const { data } = await axios.get(
      `/currentconditions/v1/${locationId}?apikey=${apikey}`
    );

    if (data && cityName && locationId) {
      return { ...data[0], cityName, locationId };
    }
  } catch (err) {
    openErrorMessage(err);
  }
};

export const getFiveDayForecast = async locationId => {
  try {
    const { data } = await axios.get(
      `/forecasts/v1/daily/5day/${locationId}?apikey=${apikey}&metric=true`
    );

    if (data) return data;
  } catch (err) {
    openErrorMessage(err);
  }
};
