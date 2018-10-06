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

export default class ChatScreen extends React.Component {
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
        <Text>Chat with us</Text>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
