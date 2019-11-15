import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "src/reducers";
import thunk from "redux-thunk";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
