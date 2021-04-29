import React from 'react';
import moment from 'moment';

import { createImageIcon } from '../../../utilities/helpers';
import classes from './ForecastItem.module.scss';

const ForecastItem = props => {
  const { date, iconDay, iconNight, tempMax, tempMin } = props;

  return (
    <div className={classes.forecastItem}>
      <div className={classes.forecastHeader}>
        <h3>{moment(date).format('ddd')}</h3>
        <p>{moment(date).format('DD/MM')}</p>
      </div>
      <div className={classes.forecastDesc}>
        <img src={createImageIcon(iconDay)} alt={date} />
        <p>
          <span>{tempMax}</span>
        </p>
      </div>
      <div className={classes.forecastDesc}>
        <img src={createImageIcon(iconNight)} alt={date} />
        <p>
          <span>{tempMin}</span>
        </p>
      </div>
    </div>
  );
};

export default ForecastItem;
