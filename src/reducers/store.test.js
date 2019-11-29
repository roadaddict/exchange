import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

describe('On load', () => {
  it('should do something', () => {
    const store = createStore(
      RootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );

    const action = {
      type: 'SET_QUOTES',
      payload: {
        EUR: 1,
        GBP: 0.85225,
        USD: 1.0982
      }
    };

    store.dispatch(action).then(() => {
      console.log(actual);
      const actual = store.getState();
    });

    // TODO: assert value from store
  });
});
