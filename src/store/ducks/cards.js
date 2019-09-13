import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const {Types, Creators} = createActions(
  {
    selectCard: ['index', 'number'],
    setCard1: ['card'],
    setCard2: ['card'],
    match: ['number'],
    finishMove: null,
    resetCards: null,
  },
  {
    prefix: 'Cards/',
  },
);

export const CardsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  matches: [],
  card1: null,
  card2: null,
  moves: 0,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CARD1]: (state, {card}) => state.merge({card1: card}),
  [Types.SET_CARD2]: (state, {card}) => state.merge({card2: card}),
  [Types.MATCH]: (state, {number}) =>
    state.merge({matches: [...state.matches, number]}),
  [Types.FINISH_MOVE]: state => state.merge({moves: state.moves + 1}),
});
