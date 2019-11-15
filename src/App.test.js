import React from 'react';
import App from './App';
import Rates from './components/rates';
import SelectCurrency from './components/selectCurrency';
import WalletStatus from './components/walletStatus';
import renderer from 'react-test-renderer';

test('General test ', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Rates component test ', () => {
  const component = renderer.create(
    <Rates currencyFrom="GBP" currencyTo="USD" quotes={{ GBP: 1, USD: 1.3 }} />
  );
  let rates = component.toJSON();
  expect(rates).toMatchSnapshot();
});

test('Currency selector component test ', () => {
  const component = renderer.create(
    <SelectCurrency
      currencies={['USD', 'GBP', 'EUR']}
      selected="USD"
      onSelectCurrency={() => true}
    />
  );
  let selectCurrency = component.toJSON();
  expect(selectCurrency).toMatchSnapshot();
});

test('Wallet status component test ', () => {
  const component = renderer.create(
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
  );
  let walletStatus = component.toJSON();
  expect(walletStatus).toMatchSnapshot();
});
