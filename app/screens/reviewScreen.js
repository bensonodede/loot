import React from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BoxShadow } from "react-native-shadow";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";
export default class ReviewScreen extends React.Component {
  render() {
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
              Review booking details
            </Text>
            <View
              style={{
                paddingHorizontal: responsiveWidth(4),
                marginBottom: responsiveHeight(6),
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text
                style={[
                  styles.fontMedium,
                  {
                    fontSize: responsiveFontSize(2.5),
                    color: "#636c72"
                  }
                ]}
              >
                10 days booked for God of war.
              </Text>
            </View>
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
                Dates
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.7),
                  color: "#484848"
                }}
              >
                Oct 10 - Oct 20
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
                Delivery time
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.7),
                  color: "#484848"
                }}
              >
                8 AM - 9 AM
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(2),
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
                Total
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.8),
                  color: "#484848"
                }}
              >
                650 ksh
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Pricing");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                  paddingHorizontal: responsiveWidth(1),
                  paddingBottom: responsiveHeight(3),
                  width: responsiveWidth(50)
                  //paddingTop: responsiveHeight(3)
                }}
              >
                <Text
                  style={{
                    fontFamily: "CircularStd-Medium",
                    fontSize: responsiveFontSize(2.3),
                    color: "#00A699"
                  }}
                >
                  See pricing details
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                paddingHorizontal: responsiveWidth(1),
                paddingBottom: responsiveHeight(3)
              }}
            >
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(3),
                  color: "#00A699"
                }}
              >
                **
              </Text>
              <Text
                style={{
                  fontFamily: "CircularStd-Medium",
                  fontSize: responsiveFontSize(2.3),
                  color: "#636c72",
                  paddingHorizontal: responsiveWidth(2)
                }}
              >
                Payment may be made through{" "}
                <Text style={{ color: "#484848" }}>M-Pesa</Text> or{" "}
                <Text style={{ color: "#484848" }}>Cash</Text> on delivery.
              </Text>
            </View>
          </View>
        </ScrollView>
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
            onPressIn={() => {}}
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
