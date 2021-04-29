import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'antd';

import NavItems from '../../components/NavItems/NavItems';
import * as actions from '../../store/actions/actions';

import classes from './Header.module.scss';

const Header = () => {
  const { temperatureType, appMode } = useSelector(state => state.cityForecast);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <div>
        <h2 className={classes.logo}>Herolo</h2>
        <Switch
          checkedChildren={'L'}
          unCheckedChildren={'D'}
          defaultChecked={appMode === 'light'}
          onClick={() => dispatch(actions.toggleAppMode())}
        />
      </div>

      <div>
        <Switch
          checkedChildren={'°C'}
          unCheckedChildren={'°F'}
          defaultChecked={temperatureType === 'Metric'}
          onClick={() => dispatch(actions.toggleTempType())}
        />
        <nav>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Header;
