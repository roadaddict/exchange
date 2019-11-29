import reducer from './quotations';
import { Map } from 'immutable';

const initState = Map({
  GBP: 10
});

describe('Quotations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle SET_QUOTES', () => {
    expect(
      reducer([], {
        payload: { EUR: 1, GBP: 0.85225, USD: 1.0982 },
        type: 'SET_QUOTES'
      }).toJS()
    ).toEqual([
      {
        quotes: { EUR: 1, GBP: 0.85225, USD: 1.0982 }
      }
    ]);
  });
});
