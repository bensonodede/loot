import React from "react";
import { StyleSheet } from "react-native";
import { Hoshi } from "react-native-textinput-effects";

import styles from "./styles";

export default class TextInputGeneric extends React.Component {
  onChangeText = text => {
    console.log("Changing: ", text);
  };

  render() {
    const { value, label } = this.props;
    return (
      <Hoshi
        //onChangeText={this.onChangeText}
        value={value}
        //autoCapitalize="none"
        inputStyle={styles.textInput}
        label={label}
        //label={'FIRST NAME'}
        //maskColor={'#c7612f'}
        borderColor={"#000000"}
      />
    );
  }
}
