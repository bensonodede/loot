import React from "react";
import { StatusBar, View, Text } from "react-native";
import firebase from "react-native-firebase";

import styles from "../config/styles";

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Feed" : "Welcome");
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
        <View style={{ alignItems: "center" }}>
          <Text>This is the splash screen</Text>
        </View>
      </View>
    );
  }
}
