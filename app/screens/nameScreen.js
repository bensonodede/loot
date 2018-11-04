import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Hoshi } from "react-native-textinput-effects";
import Ripple from "react-native-material-ripple";
import dismissKeyboard from "react-native-dismiss-keyboard";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class NameScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      disabled: true
    };
  }

  _checkInput = () => {
    const { firstName, lastName } = this.state;

    if (firstName == "" || lastName == "") {
      this.setState({
        disabled: true
      });
    } else {
      this.setState({
        disabled: false
      });
    }
  };
  render() {
    const offset = Platform.OS === "android" ? -500 : 0;
    return (
      <KeyboardAvoidingView
        style={[
          styles.container,
          {
            flex: 1,
            paddingTop: responsiveHeight(6),
            height: responsiveHeight(100)
          }
        ]}
      >
        <ScrollView>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={"transparent"}
            animated
          />

          <View
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              borderRadius: responsiveWidth(15),
              marginLeft: responsiveWidth(-2)
            }}
          >
            <Ripple
              rippleColor={"#000000"}
              rippleContainerBorderRadius={responsiveWidth(15)}
              onPressIn={() => {
                this.props.navigation.goBack();
              }}
            >
              <View
                style={{
                  borderRadius: responsiveWidth(15),
                  width: responsiveWidth(15),
                  height: responsiveWidth(15),
                  paddingVertical: responsiveHeight(2),
                  backgroundColor: "transparent",
                  justifyContent: "center"
                }}
              >
                <IonIcons
                  name={"md-arrow-back"}
                  size={responsiveFontSize(3.6)}
                  color={"#484848"}
                  style={{
                    alignSelf: "center",
                    paddingHorizontal: responsiveWidth(2)
                  }}
                />
              </View>
            </Ripple>
          </View>

          <Text style={style1.headerStyle}>What's your name?</Text>
          <View
            style={{
              paddingTop: responsiveHeight(5),
              paddingHorizontal: responsiveWidth(2)
            }}
          >
            <Hoshi
              label={"FIRST NAME"}
              labelStyle={style1.labelStyle}
              inputStyle={style1.inputStyle}
              borderColor={"#484848"}
              // TextInput props
              autoCapitalize={"words"}
              autoCorrect={false}
              keyboardType="default"
              returnKeyType={"done"}
              onSubmitEditing={() => {
                dismissKeyboard();
              }}
              blurOnSubmit={false}
              onChangeText={text => {
                this.setState(
                  {
                    firstName: text
                  },
                  () => {
                    this._checkInput();
                  }
                );
              }}
            />
          </View>
          <View
            style={{
              // borderWidth: 1,
              paddingTop: responsiveHeight(5),
              paddingHorizontal: responsiveWidth(2)
            }}
          >
            <Hoshi
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                dismissKeyboard();
              }}
              label={"LAST NAME"}
              labelStyle={style1.labelStyle}
              inputStyle={style1.inputStyle}
              borderColor={"#484848"}
              // TextInput props
              autoCapitalize={"words"}
              autoCorrect={false}
              keyboardType={"default"}
              onChangeText={text => {
                this.setState(
                  {
                    lastName: text
                  },
                  () => {
                    this._checkInput();
                  }
                );
              }}
            />
          </View>
        </ScrollView>
        {/*Bottom button */}
        <View
          style={{
            alignSelf: "flex-end",
            width: responsiveWidth(15),
            height: responsiveWidth(15),
            borderRadius: responsiveWidth(15),
            position: "absolute",
            bottom: responsiveWidth(5),
            right: responsiveWidth(5),
            borderRadius: responsiveWidth(10),
            elevation: 6
          }}
        >
          <Ripple
            disabled={this.state.disabled}
            rippleColor={"#FFFFFF"}
            rippleContainerBorderRadius={responsiveWidth(15)}
            onPressIn={() => {
              this.props.navigation.navigate("Phone", {
                firstName: this.state.firstName,
                lastName: this.state.lastName
              });
            }}
            style={{}}
          >
            <View
              style={{
                borderRadius: responsiveWidth(15),
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                paddingVertical: responsiveHeight(2),
                backgroundColor: this.state.disabled ? "#bcd8d6" : "#00A699",
                justifyContent: "center"
              }}
            >
              <IonIcons
                name={"md-arrow-forward"}
                size={responsiveFontSize(3.6)}
                color={"#FFFFFF"}
                style={{
                  alignSelf: "center",
                  paddingHorizontal: responsiveWidth(2)
                }}
              />
            </View>
          </Ripple>
        </View>
        {/*Bottom button */}
      </KeyboardAvoidingView>
    );
  }
}

const style1 = StyleSheet.create({
  labelStyle: {
    fontFamily: "CircularStd-Medium",
    fontSize: responsiveFontSize(2.1),
    color: "#767676"
  },
  inputStyle: {
    fontFamily: "CircularStd-Medium",
    fontSize: responsiveFontSize(3),
    color: "#484848"
  },
  headerStyle: {
    fontFamily: "CircularStd-Bold",
    fontSize: responsiveFontSize(4),
    color: "#484848",
    paddingTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(2)
  }
});
