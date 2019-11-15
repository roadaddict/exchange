import { combineReducers } from "redux-immutable";
import Quotes from "./quotations";
import Balance from "./balance";

export default combineReducers({
  Quotes,
  Balance
});
