import {combineReducers} from 'redux';
import {resettableReducer} from 'reduxsauce';

import {reducer as user} from './user';
import {reducer as cards} from './cards';

const resettableCards = resettableReducer('Cards/RESET_CARDS');
const resettableUser = resettableReducer('User/RESET_USER');

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  user: resettableUser(user),
  cards: resettableCards(cards),
});

export default reducers;
