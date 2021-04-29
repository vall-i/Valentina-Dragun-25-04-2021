import React from 'react';
import { withRouter } from 'react-router-dom';

import FavContainer from '../../containers/FavContainer/FavContainer';

import classes from './Favorites.module.scss';

const Favourites = () => {
  return (
    <div className={classes.favorites}>
      <FavContainer />
    </div>
  );
};

export default withRouter(Favourites);
