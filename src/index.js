import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './routes';
import './config/Reactotron';

import {Provider} from 'react-redux';

import store from './store';

YellowBox.ignoreWarnings(['Async Storage']);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
