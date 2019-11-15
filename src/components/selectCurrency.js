import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SelectCurrencyComponent, Currency } from "./selectCurrencyStyle";

class SelectCurrency extends React.Component {
  render() {
    const { currencies, selected, onSelectCurrency } = this.props;

    return (
      <SelectCurrencyComponent>
        {currencies.map(element => (
          <Currency
            selected={element === selected}
            onClick={() => onSelectCurrency(element)}
            onKeyPress={() => onSelectCurrency(element)}
            role="button"
            tabIndex={0}
            key={element}
          >
            {element}
          </Currency>
        ))}
      </SelectCurrencyComponent>
    );
  }
}

SelectCurrency.propTypes = {
  selected: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectCurrency: PropTypes.func.isRequired
};

export default connect(state => ({
  currencies: state
    .get("Balance")
    .get("preferred")
    .toJS()
}))(SelectCurrency);
