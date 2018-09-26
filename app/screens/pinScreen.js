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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import dismissKeyboard from "react-native-dismiss-keyboard";
import firebase from "react-native-firebase";
import CodeInput from "react-native-confirmation-code-input";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class PinScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      confirmResult: null
    };
  }

  componentDidMount() {
    const confirmResult = this.props.navigation.getParam("confirmResult");
    this.setState({ confirmResult }, () => {
      console.log(this.state);
    });
  }
  _goBack = () => {
    this.props.navigation.goBack();
  };

  _checkCode(code) {
    console.log(code);

    if (confirmResult) {
      this.state.confirmResult
        .confirm(code)
        .then(user => {
          Alert.alert(
            "Confirmation Code",
            "Code YES match!",
            [{ text: "OK" }],
            {
              cancelable: true
            }
          );
        })
        .catch(error =>
          Alert.alert("Confirmation Code", "Code NO match!", [{ text: "OK" }], {
            cancelable: true
          })
        );
    }
  }
  //if (!isValid) {
  //  Alert.alert("Confirmation Code", "Code not match!", [{ text: "OK" }], {
  //    cancelable: true
  //  });
  //} else {
  //  Alert.alert("Confirmation Code", "Successful!", [{ text: "OK" }], {
  //    cancelable: true
  //  });
  //}

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
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={"transparent"}
            animated
          />
          <TouchableNativeFeedback
            onPress={() => {
              this._goBack;
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
          <Text style={style1.headerStyle}>Enter confirmation code</Text>
          <View
            style={{
              paddingTop: responsiveHeight(5),
              paddingHorizontal: responsiveWidth(2),
              flexDirection: "row"
            }}
          >
            <View style={{ flex: 1, marginLeft: responsiveWidth(2.5) }}>
              <CodeInput
                ref={"pinInput"}
                keyboardType={"phone-pad"}
                codeLength={6}
                activeColor={"#00A699"}
                inactiveColor={"#00A699"}
                autoFocus={true}
                ignoreCase={true}
                inputPosition="center"
                className={"border-circle"}
                size={responsiveFontSize(6.5)}
                onFulfill={code => this._checkCode(code)}
                cellBorderWidth={2}
                codeInputStyle={style1.inputStyle}
                onSubmitEditing={() => {
                  dismissKeyboard();
                }}
                blurOnSubmit={false}
              />
            </View>
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
