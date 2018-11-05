import React from "react";
import { View, Text, StatusBar, PermissionsAndroid } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import SystemSetting from "react-native-system-setting";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";
export default class locationPermissionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      initialPosition: "",
      enableLocation: false
    };
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
        this.props.navigation.navigate("Map", { locPermission: true });
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  onEnableLocation = () => {
    SystemSetting.switchLocation(() => {
      SystemSetting.isLocationEnabled().then(enable => {
        enable ? this.props.navigation.navigate("Map") : null;
      });
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { paddingTop: StatusBar.currentHeight + responsiveHeight(6) }
        ]}
      >
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <View
          style={{
            width: responsiveWidth(15),
            height: responsiveWidth(15),
            borderRadius: responsiveWidth(15),
            width: responsiveWidth(15),
            height: responsiveWidth(15),
            justifyContent: "center"
          }}
        >
          <IonIcons
            name={"md-compass"}
            size={responsiveFontSize(5)}
            color={"#484848"}
            style={{
              alignSelf: "center",
              paddingHorizontal: responsiveWidth(2)
            }}
          />
        </View>
        <View>
          <Text
            style={[
              styles.fontBold,
              styles.blackish,
              {
                fontSize: responsiveFontSize(4),
                marginTop: responsiveHeight(2),
                marginBottom: responsiveHeight(1.2),
                paddingHorizontal: responsiveWidth(3)
              }
            ]}
          >
            Turn on location?
          </Text>
          <Text
            style={[
              styles.fontMedium,
              {
                fontSize: responsiveFontSize(2.5),
                paddingHorizontal: responsiveWidth(4),
                color: "#636c72",
                marginBottom: responsiveHeight(6)
              }
            ]}
          >
            This will help us find you during deliveries and pickups.
          </Text>
          {/*****Button******/}
          <View
            style={{
              width: responsiveWidth(40),
              borderRadius: responsiveWidth(1.5),
              paddingLeft: responsiveWidth(3)
            }}
          >
            <Ripple
              rippleColor={"#FFFFFF"}
              rippleContainerBorderRadius={responsiveWidth(1.5)}
              onPress={() => {
                this.onEnableLocation();
              }}
            >
              <View
                style={{
                  borderRadius: responsiveWidth(1.3),
                  paddingVertical: responsiveHeight(2),
                  backgroundColor: "#484848",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={[
                    styles.fontMedium,
                    styles.regular,
                    {
                      paddingVertical: responsiveWidth(1),
                      fontSize: responsiveFontSize(2.5),
                      color: "#FFFFFF",
                      textAlign: "center",
                      alignSelf: "center"
                    }
                  ]}
                >
                  Yes, turn on
                </Text>
              </View>
            </Ripple>
          </View>
          {/*****Button******/}

          {/*****Button******/}
          <View
            style={{
              width: responsiveWidth(25),
              borderRadius: responsiveWidth(1.5),
              paddingLeft: responsiveWidth(3),
              paddingTop: responsiveHeight(2)
            }}
          >
            <Ripple
              rippleColor={"#484848"}
              rippleContainerBorderRadius={responsiveWidth(1.5)}
              onPress={() => {
                this.props.navigation.navigate("Calendar");
              }}
            >
              <View
                style={{
                  borderRadius: responsiveWidth(1.3),
                  paddingVertical: responsiveHeight(2),
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "#484848"
                }}
              >
                <Text
                  style={[
                    styles.fontMedium,
                    styles.regular,
                    {
                      //paddingVertical: responsiveWidth(0.4),
                      fontSize: responsiveFontSize(2.5),
                      color: "#484848",

                      textAlign: "center",
                      alignSelf: "center"
                    }
                  ]}
                >
                  Back
                </Text>
              </View>
            </Ripple>
          </View>
          {/*****Button******/}
        </View>
      </View>
    );
  }
}
