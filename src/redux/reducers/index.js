import { combineReducers } from "redux";
import timuReducer from "./timu";
export default combineReducers({
  timuList: timuReducer,
});
