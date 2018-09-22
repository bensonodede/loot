import React from "react";
import firebase from 'react-native-firebase';
import AppNavigator from './app/navigation/appNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
