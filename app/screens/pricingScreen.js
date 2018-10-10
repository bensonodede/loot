import React from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BoxShadow } from "react-native-shadow";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";
export default class PricingScreen extends React.Component {
  render() {
    const daysNum = this.props.navigation.getParam("daysNum");
    const title = this.props.navigation.getParam("title");
    const price = this.props.navigation.getParam("price");
    const totalPrice = this.props.navigation.getParam("totalPrice");

    return (
      <View
        style={[
          styles.container,
          { paddingTop: StatusBar.currentHeight + responsiveHeight(1) }
        ]}
      >
        <ScrollView>
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
                  name={"md-close"}
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
          <View>
            <Text
              style={[
                styles.fontBold,
                styles.blackish,
                {
                  fontSize: responsiveFontSize(4),
                  marginTop: responsiveHeight(2),
                  marginBottom: responsiveHeight(1),
                  paddingHorizontal: responsiveWidth(3)
                }
              ]}
            >
              Payment summary
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
              {daysNum} days booked for {title}.
            </Text>
          </View>
          {/************ List Container ***********/}
          <View style={{ paddingHorizontal: responsiveWidth(3) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(2)
              }}
            >
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                {price} ksh x {daysNum} days
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                {totalPrice} ksh
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(3),
                paddingTop: responsiveHeight(3)
              }}
            >
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                Delivery fee
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                Free
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#DCDCDC",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(3),
                paddingTop: responsiveHeight(3)
              }}
            >
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                Pickup fee
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#636c72"
                }}
              >
                Free
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(3),
                paddingTop: responsiveHeight(3)
              }}
            >
              <Text
                style={{
                  fontFamily: "CircularStd-Black",
                  fontSize: responsiveFontSize(2.8),
                  color: "#484848"
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Black",
                  fontSize: responsiveFontSize(2.8),
                  color: "#484848"
                }}
              >
                {totalPrice} ksh
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
