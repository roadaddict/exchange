import { Map } from 'immutable';

const initialState = Map({
  GBP: 10
});

const quotes = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUOTES':
      Object.entries(action.payload).forEach(element => {
        state = state.set(element[0], element[1]);
      });
      state = state.set('EUR', 1);
      return state;
    default:
      return state;
  }
};

export default quotes;
