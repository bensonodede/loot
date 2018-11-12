import React from "react";
import { View, StatusBar, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class successScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <View style={{ paddingHorizontal: responsiveWidth(2.5) }}>
          <Text
            style={[
              styles.blackish,
              styles.fontBlack,
              styles.title2,
              {
                paddingTop: responsiveHeight(20) + StatusBar.currentHeight
              }
            ]}
          >
            Awesome!
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.3),
              paddingTop: responsiveHeight(3),
              color: "#636c72"
            }}
          >
            Your booking was successful. You will receive a{" "}
            <Text style={{ fontFamily: "CircularStd-Black", color: "#484848" }}>
              Notification
            </Text>{" "}
            once your order is confirmed.
          </Text>
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
            rippleColor={"#FFFFFF"}
            rippleContainerBorderRadius={responsiveWidth(15)}
            onPressIn={() => {
              this.props.navigation.navigate("Feed");
            }}
          >
            <View
              style={{
                borderRadius: responsiveWidth(15),
                width: responsiveWidth(15),
                height: responsiveWidth(15),
                paddingVertical: responsiveHeight(2),
                backgroundColor: "#00A699",
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
    );
  }
}
