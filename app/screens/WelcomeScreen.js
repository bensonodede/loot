import React from "react";
import {
  Button,
  StatusBar,
  TouchableNativeFeedback,
  View,
  Text,
  Platform
} from "react-native";
import firebase from "react-native-firebase";
import Ripple from "react-native-material-ripple";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import style from "../config/styles";
import styles from "../config/styles";
export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          paddingHorizontal: responsiveWidth(6),

          backgroundColor: "#FFFFFF"
        }}
      >
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"transparent"}
          animated
        />
        <View style={{ marginTop: responsiveHeight(5) }}>
          <Text
            style={[
              styles.fontBlack,
              styles.blackish,
              { fontSize: responsiveFontSize(10) }
            ]}
          >
            *
          </Text>
        </View>
        <View style={{ marginTop: responsiveHeight(2) }}>
          <Text style={[styles.fontBlack, styles.title2, styles.blackish]}>
            Welcome to Loot.
          </Text>
        </View>
        <View style={{ paddingTop: responsiveHeight(8) }}>
          <Ripple
            rippleColor={"#000000"}
            rippleContainerBorderRadius={responsiveHeight(4)}
            onPress={() => {
              this.props.navigation.navigate("Name");
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: responsiveHeight(4),
                borderColor: "#484848",
                paddingVertical: responsiveHeight(2),
                backgroundColor: "#FFFFFF",
                justifyContent: "center"
              }}
            >
              <Text
                style={[
                  styles.fontMedium,
                  styles.large,
                  { color: "#484848", textAlign: "center" }
                ]}
              >
                Create Account
              </Text>
            </View>
          </Ripple>
        </View>

        <View style={{ marginTop: responsiveHeight(3) }}>
          <Ripple
            rippleColor={"#FFFFFF"}
            rippleContainerBorderRadius={responsiveHeight(4)}
            onPress={() => {
              this.props.navigation.navigate("PhoneLogin");
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: responsiveHeight(4),
                borderColor: "#FFFFFF",
                paddingVertical: responsiveHeight(2),
                backgroundColor: "#484848",
                justifyContent: "center"
              }}
            >
              <Text
                style={[
                  styles.fontMedium,
                  styles.large,
                  { color: "#FFFFFF", textAlign: "center" }
                ]}
              >
                Login
              </Text>
            </View>
          </Ripple>
        </View>
      </View>
    );
  }
}

/*
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  */
