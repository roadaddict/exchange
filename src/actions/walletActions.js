import { Convert } from "src/helpers";

export const doExchange = (value, currencyFrom, currencyTo) => (
  dispatch,
  getState
) =>
  dispatch({
    type: "DO_EXCHANGE",
    payload: {
      valFrom: parseFloat(value),
      valTo: parseFloat(
        Convert(
          value,
          getState()
            .get("Quotes")
            .get(currencyFrom),
          getState()
            .get("Quotes")
            .get(currencyTo)
        )
      ),
      currencyFrom,
      currencyTo
    }
  });
