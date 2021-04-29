import React from 'react';

import { createImageIcon } from '../../../utilities/helpers';

import classes from './WeatherDetails.module.scss';

const WeatherDetails = props => {
  const { icon, cityName, tempScale } = props;
  const { Value, Unit } = tempScale;

  return (
    <div className={classes.weatherDetails}>
      <div className={classes.weatherIcon}>
        <img src={createImageIcon(icon)} alt={cityName} />
      </div>
      <div className={classes.weatherInfo}>
        <h1>{cityName}</h1>
        <p>
          <span>{Value.toFixed()}</span>
          <span>°</span>
          <span>{Unit}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
