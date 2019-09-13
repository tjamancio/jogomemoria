import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './routes';
import './config/Reactotron';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';

import store from './store';

YellowBox.ignoreWarnings(['Async Storage']);
YellowBox.ignoreWarnings(['componentWillMount']);

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes />
  </Provider>
);

export default App;
