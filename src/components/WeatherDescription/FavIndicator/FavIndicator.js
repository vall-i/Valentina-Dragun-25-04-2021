import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import classes from './FavIndicator.module.scss';

const FavIndicator = props => {
  const { isFav, clicked } = props;
  return (
    <div className={classes.favIndicator}>
      <button type='button' onClick={clicked}>
        {isFav ? (
          <AiFillHeart color={'#ff8246'} />
        ) : (
          <AiOutlineHeart color={'#808191'} />
        )}
      </button>
    </div>
  );
};

export default FavIndicator;
