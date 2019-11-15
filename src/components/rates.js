import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { currencyChar, currencyValue } from "src/helpers";

import { RatesComponent, Value, Equal, Currency } from "./ratesStyle";

class Rates extends React.Component {
  render() {
    const { currencyFrom, currencyTo, quotes, mini } = this.props;

    return (
      <RatesComponent>
        <Value>
          <Currency>{currencyChar(currencyFrom)}</Currency>
          <span>1</span>
        </Value>
        <Equal>=</Equal>
        <Value>
          <Currency>{currencyChar(currencyTo)}</Currency>
          {quotes[currencyFrom] && quotes[currencyTo] ? (
            <span>
              {currencyValue(quotes[currencyFrom], quotes[currencyTo], 2)}
            </span>
          ) : null}
        </Value>
      </RatesComponent>
    );
  }
}

Rates.propTypes = {
  quotes: PropTypes.object.isRequired,
  currencyFrom: PropTypes.string.isRequired,
  currencyTo: PropTypes.string.isRequired,
  mini: PropTypes.bool
};

export default connect(state => ({
  quotes: state.get("Quotes").toJS()
}))(Rates);
