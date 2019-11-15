import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateQuotes } from "actions/quotesActions";
import { doExchange } from "actions/walletActions";
import { Convert, Validation, ifValue } from "./helpers";
import SelectCurrency from "./components/selectCurrency";
import Rates from "./components/rates";
import WalletStatus from "./components/walletStatus";

import {
  Main,
  Separator,
  CurrencyLarge,
  CurrencyInput,
  CurrencyTo,
  Button
} from "./AppStyles";

class App extends React.Component {
  state = {
    isSourceFrom: true,
    currencyFrom: "GBP",
    currencyTo: "USD",
    valFrom: "",
    valTo: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.isSourceFrom
      ? {
          valTo: Convert(
            prevState.valFrom,
            nextProps.quotes[prevState.currencyFrom],
            nextProps.quotes[prevState.currencyTo]
          )
        }
      : {
          valFrom: Convert(
            prevState.valTo,
            nextProps.quotes[prevState.currencyTo],
            nextProps.quotes[prevState.currencyFrom]
          )
        };
  }

  componentDidMount() {
    this.props.updateQuotes();
    this.interval = setInterval(() => {
      this.props.updateQuotes();
    }, 10000);
  }

  onSelectFrom = currency => {
    this.setState({
      currencyFrom: currency
    });
  };

  onSelectTo = currency => {
    this.setState({
      currencyTo: currency
    });
  };

  changeFrom = event => {
    this.setState({
      valFrom: Validation(event.target.value),
      isSourceFrom: true
    });
  };

  changeTo = event => {
    this.setState({
      valTo: Validation(event.target.value),
      isSourceFrom: false
    });
  };

  exchange = () => {
    const { currencyFrom, currencyTo, valFrom } = this.state;
    this.isExchangeAvailable() &&
      this.props.doExchange(valFrom, currencyFrom, currencyTo);
  };

  isExchangeAvailable = () => {
    const { currencyFrom, currencyTo, valFrom, valTo } = this.state;

    return this.props.balance[currencyFrom] >= parseFloat(valFrom) &&
      currencyFrom !== currencyTo &&
      parseFloat(valFrom) > 0 &&
      parseFloat(valTo) > 0
      ? true
      : false;
  };

  render() {
    const { currencyFrom, currencyTo, valFrom, valTo } = this.state;

    return (
      <Main>
        <SelectCurrency
          selected={currencyFrom}
          onSelectCurrency={this.onSelectFrom}
        />
        <Separator>
          <div>
            <CurrencyLarge>{currencyFrom}</CurrencyLarge>
            <WalletStatus currency={currencyFrom} />
          </div>
          <div>
            <CurrencyInput
              value={valFrom}
              onChange={this.changeFrom}
              onFocus={this.changeFrom}
              onKeyPress={ifValue}
            />
            <Rates currencyFrom={currencyFrom} currencyTo={currencyTo} />
          </div>
        </Separator>

        <CurrencyTo>
          <SelectCurrency
            selected={currencyTo}
            onSelectCurrency={this.onSelectTo}
          />
          <Separator>
            <div>
              <CurrencyLarge>{currencyTo}</CurrencyLarge>
              <WalletStatus currency={currencyTo} />
            </div>
            <div>
              <CurrencyInput
                value={valTo}
                onChange={this.changeTo}
                onFocus={this.changeTo}
                onKeyPress={ifValue}
              />
              <Rates currencyFrom={currencyTo} currencyTo={currencyFrom} />
            </div>
          </Separator>
        </CurrencyTo>
        <Button
          onClick={this.exchange}
          isAvailable={this.isExchangeAvailable()}
        >
          Exchange
        </Button>
      </Main>
    );
  }
}

App.propTypes = {
  quotes: PropTypes.object.isRequired,
  updateQuotes: PropTypes.func.isRequired,
  doExchange: PropTypes.func.isRequired,
  balance: PropTypes.object.isRequired
};

export default connect(
  state => ({
    quotes: state.get("Quotes").toJS(),
    balance: state
      .get("Balance")
      .get("values")
      .toJS()
  }),
  { updateQuotes, doExchange }
)(App);
