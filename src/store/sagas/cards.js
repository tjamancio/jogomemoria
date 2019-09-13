import {select, put, delay} from 'redux-saga/effects';
import CardsActions from '../ducks/cards';

import {NavigationActions} from 'react-navigation';

export function* selectCard({index, number}) {
  const card1 = yield select(state => state.cards.card1);
  const card2 = yield select(state => state.cards.card2);
  yield put(NavigationActions.navigate({routeName: 'Login'}));

  if (!card1 || !card2) {
    if (!card1) {
      yield put(CardsActions.setCard1({index, number}));
    }

    if (card1 && card1.index !== index && !card2) {
      yield put(CardsActions.setCard2({index, number}));
      yield put(CardsActions.finishMove());

      if (card1.number === number) {
        yield put(CardsActions.match(number));
      }

      yield delay(1000);
      yield put(CardsActions.setCard1(null));
      yield put(CardsActions.setCard2(null));
    }
  } else {
    yield put(CardsActions.setCard1(null));
    yield put(CardsActions.setCard2(null));
    yield put(CardsActions.setCard1({index, number}));
  }
}
