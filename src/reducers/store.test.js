import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('On load', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should do something', () => {
    const store = mockStore({
      GBP: 10
    });

    const action = {
      type: 'SET_QUOTES',
      payload: {
        EUR: 1,
        GBP: 0.85225,
        USD: 1.0982
      }
    };

    return store.dispatch(action).then(() => {
      const actual = store.getState();
    });
  });
});
