import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import HomeView from './Views/home.view'
import {store, persistedStore} from '../src/store/index'


ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate persistor={persistedStore} >
      <HomeView />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

