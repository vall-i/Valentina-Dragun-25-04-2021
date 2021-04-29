import React from 'react';

import ForecastItem from './ForecastItem/ForecastItem';

import { convertTemp } from '../../utilities/helpers';

import classes from './Forecast.module.scss';

const Forecast = props => {
  const { dailyForecast, tempScale } = props;

  return (
    <div className={classes.forecast}>
      {dailyForecast.map(day => (
        <ForecastItem
          key={day.EpochDate}
          date={day.Date}
          tempMax={convertTemp(day.Temperature.Maximum.Value, tempScale)}
          tempMin={convertTemp(day.Temperature.Minimum.Value, tempScale)}
          iconDay={day.Day.Icon}
          iconNight={day.Night.Icon}
        />
      ))}
    </div>
  );
};

export default Forecast;
