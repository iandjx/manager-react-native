import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  auth: AuthReducer
});

// console.log(store.getState());
// {libraries: []}
