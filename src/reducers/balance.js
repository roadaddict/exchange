import { Map, List } from 'immutable';

const initState = Map({
  preferred: List(['GBP', 'USD', 'EUR']),
  values: Map({
    GBP: 500,
    USD: 0,
    EUR: 50
  })
});

const quotes = (state = initState, action) => {
  switch (action.type) {
    case 'DO_EXCHANGE':
      state = state.setIn(
        ['values', action.payload.currencyFrom],
        state.getIn(['values', action.payload.currencyFrom]) -
          action.payload.valFrom
      );

      state = state.setIn(
        ['values', action.payload.currencyTo],
        state.getIn(['values', action.payload.currencyTo]) +
          action.payload.valTo
      );

      return state;

    default:
      return state;
  }
};

export default quotes;
