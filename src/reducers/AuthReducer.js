import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: "" };

export default (INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return state;
    default:
      return state;
  }
};
