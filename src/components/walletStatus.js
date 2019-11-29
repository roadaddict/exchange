import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencyChar } from '../helpers';
import { WalletStatusComponent } from './walletStatusStyle';

class WalletStatus extends React.Component {
  render() {
    const { balance, currency } = this.props;

    return (
      <WalletStatusComponent>
        <span>
          You have: {currencyChar(currency)}
          {balance.values[currency] ? balance.values[currency].toFixed(2) : 0}
        </span>
      </WalletStatusComponent>
    );
  }
}

WalletStatus.propTypes = {
  currency: PropTypes.string.isRequired,
  balance: PropTypes.object.isRequired
};

export default connect(state => ({
  balance: state.get('Balance').toJS()
}))(WalletStatus);
