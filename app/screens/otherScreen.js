import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";
import firebase from "react-native-firebase";

import styles from "../config/styles";

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: "Lots of features here",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <Button
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                console.log("SIGNED OUT");
              })
              .catch(error => console.log(error));
          }}
          title={"SIGN OUT"}
        />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
