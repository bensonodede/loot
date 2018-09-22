import React from "react";
import {
  View,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import dismissKeyboard from "react-native-dismiss-keyboard";
import { Hoshi } from "react-native-textinput-effects";

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
      this.setState(
        {
          disabled: true
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      this.setState(
        {
          disabled: false
        },
        () => {
          console.log("THIS FORM IS VALID");
        }
      );
    }
  };
  render() {
    const offset = Platform.OS === "android" ? -500 : 0;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraHeight={responsiveHeight(10)}
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF"
        }}
      >
        <View
          style={[
            styles.container,
            {
              flex: 1,
              paddingTop: responsiveHeight(6),
              height: responsiveHeight(100)
            }
          ]}
        >
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={"transparent"}
            animated
          />
          <TouchableNativeFeedback
            onPress={() => {
              console.log("TAKE ME BACK !");
            }}
            background={
              Platform.Version >= 21
                ? TouchableNativeFeedback.Ripple("#000000", true)
                : TouchableNativeFeedback.SelectableBackground()
            }
          >
            <View
              style={{
                width: responsiveWidth(10),
                paddingTop: responsiveHeight(2)
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
          </TouchableNativeFeedback>
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
          <TouchableNativeFeedback
            disabled={this.state.disabled}
            onPress={() => {
              console.log("TAKE ME FORWARD !");
            }}
            background={
              Platform.Version >= 21
                ? TouchableNativeFeedback.Ripple("#FFFFFF", true)
                : TouchableNativeFeedback.SelectableBackground()
            }
          >
            <View
              style={{
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                backgroundColor: this.state.disabled ? "#bcd8d6" : "#00A699",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: responsiveWidth(5),
                right: responsiveWidth(5),
                borderRadius: responsiveWidth(10),
                zIndex: 3
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
          </TouchableNativeFeedback>
        </View>
      </KeyboardAwareScrollView>
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
