import React from 'react';

import { createImageIcon } from '../../utilities/helpers';

import classes from './FavItem.module.scss';

const FavItem = props => {
  const { cityName, tempScale, icon, text, locationId, setLocation } = props;
  const { Value, Unit } = tempScale;

  return (
    <div
      className={classes.favItem}
      onClick={() => setLocation(locationId, cityName)}
    >
      <div className={classes.favItemHeader}>
        <h1>{cityName}</h1>
        <p>
          <span>{Value.toFixed()}</span>
          <span>°</span>
          <span>{Unit}</span>
        </p>
      </div>
      <div className={classes.favItemIcon}>
        <img src={createImageIcon(icon)} alt={cityName} />
      </div>
      <div className={classes.weatherText}>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default FavItem;
