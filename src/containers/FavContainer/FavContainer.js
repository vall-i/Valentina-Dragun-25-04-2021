import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FavItem from '../../components/FavItem/FavItem';
import * as actions from '../../store/actions/actions';

import classes from './FavContainer.module.scss';

const FavContainer = props => {
  const { favorites, favoritesFullData } = useSelector(
    state => state.favorites
  );
  const { temperatureType } = useSelector(state => state.cityForecast);

  const { history } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchFavLocationWeather(favorites));
  }, [dispatch, favorites]);

  const setLocation = useCallback(
    (id, name) => {
      dispatch(actions.setLocation(id, name));
      history.push('/');
    },
    [dispatch, history]
  );

  if (!favoritesFullData.length)
    return (
      <div className={classes.favContainer}>
        <h1>No favorites yet...</h1>
      </div>
    );

  return (
    <div className={classes.favContainer}>
      {favoritesFullData.filter(f => f).map(f => (
        <FavItem
          key={f.locationId}
          locationId={f.locationId}
          cityName={f.cityName}
          tempScale={f.Temperature[temperatureType]}
          text={f.WeatherText}
          icon={f.WeatherIcon}
          setLocation={setLocation}
        />
      ))}
    </div>
  );
};

export default withRouter(FavContainer);
