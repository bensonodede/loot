import React from "react";
import { StatusBar, View, Text } from "react-native";
import firebase from "react-native-firebase";
import SplashScreen from "react-native-smart-splash-screen";

import styles from "../config/styles";

export default class SplashScreenView extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 500
      });
      this.props.navigation.navigate(user ? "Chat" : "Chat");
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"transparent"}
          animated
        />
      </View>
    );
  }
}
