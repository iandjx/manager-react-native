import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";
import ReduxThunk from "redux-thunk";

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBxp_Y3FZOmiIM7RfHAYDVGZwZBYQ-9eaU",
      authDomain: "authentication-afe67.firebaseapp.com",
      databaseURL: "https://authentication-afe67.firebaseio.com",
      projectId: "authentication-afe67",
      storageBucket: "authentication-afe67.appspot.com",
      messagingSenderId: "913075465416"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
