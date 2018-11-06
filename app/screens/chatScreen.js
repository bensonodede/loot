import React from "react";
import { AsyncStorage, StatusBar, Linking, View, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Emoji from "react-native-emoji";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

const text = "Hello";
const phoneNumber = "+254724645546";
export default class ChatScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  shareToWhatsAppWithContact = (text, phoneNumber) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { paddingTop: StatusBar.currentHeight + responsiveHeight(13) }
        ]}
      >
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />

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
            Talk to us.
          </Text>
          <Text
            style={[
              styles.fontMedium,
              {
                fontSize: responsiveFontSize(2.5),
                paddingHorizontal: responsiveWidth(4),
                color: "#636c72",
                marginBottom: responsiveHeight(6),
                lineHeight: responsiveFontSize(3.4)
              }
            ]}
          >
            Having trouble choosing a game? Delivery hasn't arrived? Don't know
            how to request a pickup?
          </Text>
          <Text
            style={[
              styles.fontMedium,
              {
                fontSize: responsiveFontSize(2.5),
                paddingHorizontal: responsiveWidth(4),
                color: "#636c72",
                marginBottom: responsiveHeight(6),
                lineHeight: responsiveFontSize(3.4)
              }
            ]}
          >
            Reach us below on whatsapp.{" "}
            <Emoji
              name="space_invader"
              style={{ fontSize: responsiveFontSize(2.5) }}
            />
            <Emoji
              name="video_game"
              style={{ fontSize: responsiveFontSize(2.5) }}
            />
          </Text>
          {/*****Button******/}
          <View
            style={{
              width: responsiveWidth(28),
              borderRadius: responsiveWidth(1.5),
              marginLeft: responsiveWidth(3.5),
              elevation: 3
            }}
          >
            <Ripple
              rippleColor={"#FFFFFF"}
              rippleContainerBorderRadius={responsiveWidth(1.5)}
              onPress={() => {
                this.shareToWhatsAppWithContact("", "+254775310247s");
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
                  Chat
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
