import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import { Spin } from 'antd';

import App from './App';

import cityForecastReducer from './store/reducers/cityForecast';
import favoritesReducer from './store/reducers/favorites';
import appModeReducer from './store/reducers/appMode';

import 'antd/dist/antd.css';
import './styles/global.module.scss';
import './styles/antdStyles.scss';

axios.defaults.baseURL = 'https://dataservice.accuweather.com/';

const rootReducer = combineReducers({
  cityForecast: cityForecastReducer,
  favorites: favoritesReducer,
  appMode: appModeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const spinner = (
  <div style={{ margin: '70px auto 0', textAlign: 'center' }}>
    <Spin size='middle' />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={spinner}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
