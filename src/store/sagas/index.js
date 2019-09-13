import {all, takeLatest} from 'redux-saga/effects';
import {CardsTypes} from '../ducks/cards';
import {selectCard} from './cards';

export default function* rootSaga() {
  yield all([takeLatest(CardsTypes.SELECT_CARD, selectCard)]);
}
