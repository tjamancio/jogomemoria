import {combineReducers} from 'redux';

import {reducer as user} from './user';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  user,
});

export default reducers;
