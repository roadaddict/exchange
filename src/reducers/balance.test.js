import reducer from './balance';
import { Map, List } from 'immutable';

const initState = Map({
  preferred: List(['GBP', 'USD', 'EUR']),
  values: Map({
    GBP: 500,
    USD: 0,
    EUR: 50
  })
});

describe('Balance reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle DO_EXCHANGE', () => {
    expect(
      reducer([], {
        payload: {
          currencyFrom: 'EUR',
          currencyTo: 'GBP',
          valFrom: 10,
          valTo: 10
        },
        type: 'DO_EXCHANGE'
      })
    ).toEqual([
      {
        values: { EUR: 1, GBP: 0.85225, USD: 1.0982 }
      }
    ]);
  });
});
