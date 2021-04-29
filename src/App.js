import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import classes from './App.module.scss';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));

const App = () => {
  const { appMode } = useSelector(state => state.appMode);

  return (
    <div className={classes[appMode]}>
      <Layout>
        <Switch>
          <Route path='/favorites' exact>
            <Favorites />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
