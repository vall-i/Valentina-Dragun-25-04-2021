import React from 'react';

import NavItem from './NavItem/NavItem';

import classes from './NavItems.module.scss';

const NavItems = () => {
  return (
    <ul className={classes.navItems}>
      <li>
        <NavItem link='/' exact>
          Home
        </NavItem>
      </li>
      <li>
        <NavItem link='/favorites'>Favorites</NavItem>
      </li>
    </ul>
  );
};

export default NavItems;
