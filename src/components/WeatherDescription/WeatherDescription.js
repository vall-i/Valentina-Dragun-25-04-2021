import React from 'react';

import FavIndicator from './FavIndicator/FavIndicator';
import WeatherDetails from './WeatherDetails/WeatherDetails';

import classes from './WeatherDescription.module.scss';

const WeatherDescription = props => {
  const {
    isFav,
    toggleFavLocation,
    weatherIcon,
    tempScale,
    label,
    text,
  } = props;

  return (
    <div className={classes.weatherDescription}>
      <div className={classes.locWeather}>
        <WeatherDetails
          cityName={label}
          tempScale={tempScale}
          icon={weatherIcon}
        />
        <FavIndicator isFav={isFav} clicked={toggleFavLocation} />
      </div>
      <div className={classes.weatherText}>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default WeatherDescription;
