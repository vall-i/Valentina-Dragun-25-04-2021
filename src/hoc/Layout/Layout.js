import React from 'react';

import Header from '../../containers/Header/Header';

import classes from './Layout.module.scss';

const Layout = props => {
  return (
    <>
      <Header />
      <main className={classes.mainContent}>{props.children}</main>
    </>
  );
};

export default Layout;
