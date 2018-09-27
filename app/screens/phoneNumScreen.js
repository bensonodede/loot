import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback,
  Platform,
  Button
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
import Ripple from "react-native-material-ripple";
import { TextInputMask } from "react-native-masked-text";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class PhoneNumScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      phoneNum: "",
      phoneValid: "",
      errorMsg: "",
      disabled: true,
      sending: false
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.props.navigation.navigate("Feed");
      } else {
        console.log("NO USER");
      }
    });
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
    setTimeout(() => {
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phoneValid)
        .then(confirmResult =>
          this.setState({ sending: false }, () => {
            this._goToNext(confirmResult);
            console.log(confirmResult);
            console.log(this.state);
          })
        )
        .catch(error =>
          this.setState({ sending: false, errorMsg: error }, () => {
            console.log(this.state);
          })
        );
    }, 500);
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
            color={"#FFFFFF"}
            //size={"normal"}
            overlayColor={"rgba(0, 0, 0, 0.35)"}
          />
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={
              this.state.sending ? "rgba(0, 0, 0, 0.35)" : "transparent"
            }
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
              {/* <Hoshi
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
              />*/}
              <TextInputMask
                refInput={ref => (this._myDatetimeField = ref)}
                // here we set the custom component and their props.
                customTextInput={Hoshi}
                customTextInputProps={{
                  label: "",
                  labelStyle: style1.labelStyle,
                  inputStyle: style1.inputStyle,
                  maxLength: 10
                }}
                type={"custom"}
                options={{
                  mask: "999 999999"
                }}
                // don't forget: the value and state!
                onChangeText={datetime => {
                  console.log(this._myDatetimeField.getElement());
                }}
                value={this.state.birthday}
              />
            </View>
          </View>

          <View
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              borderRadius: responsiveWidth(15),
              position: "absolute",
              bottom: responsiveWidth(5),
              right: responsiveWidth(5),
              borderRadius: responsiveWidth(10),
              zIndex: 3
            }}
          >
            <Ripple
              disabled={this.state.disabled}
              rippleColor={"#000000"}
              rippleContainerBorderRadius={responsiveWidth(15)}
              onPressIn={() => {
                console.log(this.state);
              }}
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
