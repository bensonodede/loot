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
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
