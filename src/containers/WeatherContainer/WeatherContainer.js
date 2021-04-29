import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/actions';

import WeatherDescription from '../../components/WeatherDescription/WeatherDescription';
import Forecast from '../../components/Forecast/Forecast';

import classes from './WeatherContainer.module.scss';

const WeatherContainer = () => {
  const dispatch = useDispatch();

  const {
    currentCondition,
    currentLocation,
    temperatureType,
    forecast,
    firstEnter,
  } = useSelector(state => state.cityForecast);
  const { favorites } = useSelector(state => state.favorites);

  const { id, name } = currentLocation;

  useEffect(() => {
    dispatch(actions.fetchCityForecast(id, name));
  }, [dispatch, id, name]);

  useEffect(() => {
    if (firstEnter) dispatch(actions.fetchGeoposition());
  }, [dispatch, firstEnter]);

  if (!currentCondition)
    return (
      <div className={classes.noWeather}>
        <h1>City not selected yet...</h1>
      </div>
    );

  let isFavorite;
  if (currentCondition) isFavorite = !!favorites[id];

  return (
    <div className={classes.weatherContainer}>
      <WeatherDescription
        label={name}
        isFav={isFavorite}
        weatherIcon={currentCondition.WeatherIcon}
        tempScale={currentCondition.Temperature[temperatureType]}
        text={currentCondition.WeatherText}
        toggleFavLocation={() =>
          dispatch(actions.toggleFavLocation(currentLocation))
        }
      />
      <Forecast dailyForecast={forecast} tempScale={temperatureType} />
    </div>
  );
};

export default WeatherContainer;
