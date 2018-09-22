import React from "react";
import { Button, Text, View } from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _handleSubmit = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text>LOGIN HERE!</Text>
        <View style={{ width: 250 }}>
          <Button title="Sign Up" onPress={this._handleSubmit} />
        </View>
      </View>
    );
  }
}
