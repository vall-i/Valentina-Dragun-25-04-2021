import React from 'react';

import SearchLocation from '../../containers/SearchLocation/SearchLocation';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <SearchLocation />
      <WeatherContainer />
    </div>
  );
};

export default Home;
