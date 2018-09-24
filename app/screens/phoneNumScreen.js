import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
  Platform,
  Alert
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Hoshi } from "react-native-textinput-effects";
import { parseNumber } from "libphonenumber-js";
import dismissKeyboard from "react-native-dismiss-keyboard";
import Spinner from "react-native-loading-spinner-overlay";

import IonIcons from "react-native-vector-icons/Ionicons";

import styles from "../config/styles";

export default class PhoneNumScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      phoneValid: "",
      errorMsg: "",
      disabled: true,
      sending: false
    };
  }

  _goToNext = confirmResult => {
    this.props.navigation.navigate("Pin", {
      confirmResult: confirmResult
    });
  };

  _goBack = () => {
    this.props.navigation.goBack();
  };

  _formatNum = () => {
    const { phoneNum } = this.state;
    const phoneValid = parseNumber("Phone: +254" + phoneNum, "KE");
    if (phoneValid.phone == null) {
      this.setState({ disabled: true });
    } else {
      this.setState(
        { disabled: false, phoneValid: "+254" + phoneValid.phone },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  _sendMsg = () => {
    /* firebase
      .auth()
      .signInWithPhoneNumber(phoneValid)
      .then(confirmResult =>
        this.setState({ sending: false }, () => {
          this._goToNext(confirmResult);
          console.log(this.state);
        })
      )
      .catch(error =>
        this.setState({ sending: false, errorMsg: error }, () => {
          console.log(this.state);
        })
      );*/
    setTimeout(() => {
      console.log(this.state);
      this.setState({ sending: false });
    }, 5000);
  };

  _signIn() {
    this.setState({ sending: true }, () => {
      this._sendMsg();
      console.log(this.state);
    });
  }
  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
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
          <Spinner
            visible={this.state.sending}
            animation={"slide"}
            color={"#FF5A5F"}
            size={"normal"}
            overlayColor={"rgba(0, 0, 0, 0.25)"}
          />
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={
              this.state.sending ? "rgba(0, 0, 0, 0.25)" : "transparent"
            }
            animated
          />
          <TouchableNativeFeedback
            onPress={() => {
              this._goBack;
            }}
            style={{ justifyContent: "center" }}
            background={
              Platform.Version >= 21
                ? TouchableNativeFeedback.Ripple("#000000", true)
                : TouchableNativeFeedback.SelectableBackground()
            }
          >
            <View
              style={{
                width: responsiveWidth(10),
                paddingTop: responsiveHeight(2),
                alignItems: "center",
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
          </TouchableNativeFeedback>
          <Text style={style1.headerStyle}>And, your number?</Text>
          <Text style={style1.moreInfoStyle}>
            This is so we can contact you for deliveries and pickups.
          </Text>
          <View
            style={{
              paddingTop: responsiveHeight(5),
              paddingHorizontal: responsiveWidth(2),
              flexDirection: "row"
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: responsiveHeight(1)
              }}
            >
              <Text style={style1.countryCode}>+254</Text>
            </View>
            <View style={{ flex: 1, marginLeft: responsiveWidth(2.5) }}>
              <Hoshi
                label={""}
                placeholder={"712345678"}
                labelStyle={style1.labelStyle}
                inputStyle={style1.inputStyle}
                borderColor={"#484848"}
                // TextInput props
                autoCapitalize={"words"}
                autoCorrect={false}
                autoFocus={false}
                keyboardType={"phone-pad"}
                returnKeyType={"done"}
                maxLength={10}
                onSubmitEditing={() => {
                  dismissKeyboard();
                }}
                blurOnSubmit={false}
                onChangeText={text => {
                  this.setState(
                    {
                      phoneNum: text
                    },
                    () => {
                      this._formatNum();
                    }
                  );
                }}
              />
            </View>
          </View>

          <TouchableNativeFeedback
            disabled={this.state.disabled}
            onPress={() => {
              this._signIn();
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
  },
  moreInfoStyle: {
    fontFamily: "CircularStd-Medium",
    fontSize: responsiveFontSize(2.5),
    color: "#484848",
    paddingTop: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(2)
  },
  countryCode: {
    fontFamily: "CircularStd-Medium",
    fontSize: responsiveFontSize(2.8),
    color: "#FFFFFF",
    backgroundColor: "#484848",
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(1)
  }
});
