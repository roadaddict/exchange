import React from 'react';
import App from './App';
import Rates from './components/rates';
import SelectCurrency from './components/selectCurrency';
import WalletStatus from './components/walletStatus';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shallow } from 'enzyme';

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe('<App /> test with Enzime', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });
});

test('General App test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rates component test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Rates
        currencyFrom="GBP"
        currencyTo="USD"
        quotes={{ GBP: 1, USD: 1.3 }}
      />
    </Provider>
  );
  let rates = component.toJSON();
  expect(rates).toMatchSnapshot();
});

test('Currency selector component test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <SelectCurrency
        currencies={['USD', 'GBP', 'EUR']}
        selected="USD"
        onSelectCurrency={() => true}
      />
    </Provider>
  );
  let selectCurrency = component.toJSON();
  expect(selectCurrency).toMatchSnapshot();
});

test('Wallet status component test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <WalletStatus
        balance={{
          values: {
            GBP: 500,
            USD: 0,
            EUR: 50
          }
        }}
        currency="EUR"
      />
    </Provider>
  );
  let walletStatus = component.toJSON();
  expect(walletStatus).toMatchSnapshot();
});
