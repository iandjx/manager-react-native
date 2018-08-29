import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: "" };

console.log(EMAIL_CHANGED);

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
