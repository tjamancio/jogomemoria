import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import Game from './pages/Game';
import Ranking from './pages/Ranking';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main: createBottomTabNavigator({
      Game,
      Ranking,
    }),
  }),
);

export default Routes;
