import Axios from 'axios';

const ratesJson = 'https://api.exchangeratesapi.io/latest';

export const updateQuotes = () => dispatch =>
  Axios.get(ratesJson, { crossdomain: true }).then(response => {
    dispatch({
      type: 'SET_QUOTES',
      payload: response.data.rates
    });
  });
