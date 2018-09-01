import { EMPLOYEE_UPDATE } from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      console.log(action.payload.prop);
      return { ...state, [action.payload.prop]: action.payload.value };
    //key interpolation [x.payload.prop]...
    default:
      return state;
  }
};