import { combineReducers } from "redux";
import Counter from "./counterReducer";
import LoggedIn from "./isLoggedInReducer";

const JoinedReducers = combineReducers({
  counter: Counter,
  loggedIn: LoggedIn,
});

export default JoinedReducers;
