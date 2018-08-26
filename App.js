import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';

export default class App extends React.Component {

  componentWillMount(){
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}
