import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // console.log(action.payload.prop);
      return { ...state, [action.payload.prop]: action.payload.value };
    //key interpolation [x.payload.prop]...
    case EMPLOYEE_CREATE:
      return { INITIAL_STATE };
    case EMPLOYEE_SAVE_SUCCESS:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
