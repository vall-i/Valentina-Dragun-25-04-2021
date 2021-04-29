import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.scss';

const NavItem = props => {
  return (
    <NavLink
      to={props.link}
      exact={props.exact}
      onClick={props.clicked}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;
