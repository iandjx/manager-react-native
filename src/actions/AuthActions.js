import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user))
      .catch(error => {
        console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSucess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSucess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};
