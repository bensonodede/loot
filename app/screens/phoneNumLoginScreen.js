import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  NetInfo,
  PermissionsAndroid
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
import FlashMessage from "react-native-flash-message";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class PhoneNumLoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.disconnected = true;
    this.state = {
      isConnected: true,
      loadState: "",
      phoneNum: "",
      phoneValid: "",
      errorMsg: "",
      disabled: true,
      sending: false,
      confirmResult: null
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );

    NetInfo.isConnected.fetch().then(isConnected => {
      if (this.disconnected) {
        this.setState({ isConnected });
      }
    });

    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ sending: false });
        this.props.navigation.navigate("Feed");
        console.log(user);
      } else {
        console.log("NOT SIGNED IN");
        this.setState({
          phoneNum: "",
          phoneValid: "",
          errorMsg: "",
          confirmResult: null
        });
      }
    });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
    this.disconnected = false;
    if (this.unsubscribe) this.unsubscribe();
  }

  _noInternetAlert() {
    this.refs.fm1LocalInstance.showMessage({
      message: "No internet connection",
      type: "warning",
      backgroundColor: "#d93900",
      color: "#FFFFFF"
    });
  }

  _yesInternetAlert() {
    this.refs.fm1LocalInstance.showMessage({
      message: "Connected",
      type: "default",
      backgroundColor: "#00A699",
      color: "#FFFFFF"
    });
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected, sending: false });
    } else {
      this.setState({ isConnected }, () => {
        this._noInternetAlert();
      });
    }
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

  _signIn() {
    if (this.state.isConnected) {
      console.log(this.state);
      this.setState(
        { sending: true, loadState: "Verifying your number..." },
        () => {
          this._sendMsg();
        }
      );
    } else {
      this._noInternetAlert();
    }
  }

  _sendMsg = () => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phoneValid)
        .then(confirmResult =>
          this.setState({ confirmResult }, () => {
            console.log("SENDING MESSAGE...");
            console.log(confirmResult);
          })
        )
        .catch(error =>
          this.setState({ sending: false, errorMsg: error }, () => {
            console.log(error);
            this._noInternetAlert();
          })
        );
    }, 500);
  };

  confirmCode = () => {
    if (this.state.confirmResult) {
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.setState({ sending: false });
          console.log("Code confirmed");
        })
        .catch(error => {
          this.setState({ sending: false });
          console.log(error);
          this._noInternetAlert();
        });
    }
  };

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
              paddingTop: responsiveHeight(5),
              height: responsiveHeight(100)
            }
          ]}
        >
          <Spinner
            visible={this.state.sending}
            textContent={this.state.loadState}
            textStyle={{
              fontFamily: "CircularStd-Medium",
              color: "#FFFFFF",
              fontSize: responsiveFontSize(2.5)
            }}
            animation={"slide"}
            color={"#FFFFFF"}
            size={"large"}
            overlayColor={"rgba(0, 0, 0, 0.5)"}
          />
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={
              this.state.sending ? "rgba(0, 0, 0, 0.5)" : "transparent"
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

          <Text style={style1.headerStyle}>Enter your phone number.</Text>
          <Text style={style1.moreInfoStyle}>
            Maybe we'll text you someday when we are not too shy...
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
                maxLength={9}
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
              rippleColor={"#FFFFFF"}
              rippleContainerBorderRadius={responsiveWidth(15)}
              onPressIn={() => {
                this._signIn();
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
        <FlashMessage
          ref="fm1LocalInstance"
          position="bottom"
          hideOnPress={true}
          animated={true}
          autoHide={true}
          duration={4000}
        />
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
