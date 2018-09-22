import React from "react";
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import ReadMore from "react-native-read-more-text";

import Icon from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  _goBack = () => {
    this.props.navigation.goBack();
  };

  _renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={[styles.fontMedium, styles.greenish, styles.regular]}
        onPress={handlePress}
      >
        Read more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text
        style={[styles.fontMedium, styles.greenish, styles.regular]}
        onPress={handlePress}
      >
        Hide
      </Text>
    );
  };
  render() {
    const details = this.props.navigation.getParam("gameDetails");

    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={"rgba(0, 0, 0, 0.2)"}
            animated
          />
          <View
            style={{
              flex: 1,
              alignItems: "center",
              height: responsiveHeight(65),
              width: responsiveWidth(100)
            }}
          >
            <Image
              source={{ uri: details.imageUrl }}
              style={{
                flex: 1,
                height: responsiveHeight(85),
                width: responsiveWidth(100),
                position: "absolute",
                top: 0,
                left: 0
              }}
              resizeMode={"cover"}
            />
          </View>
          <View
            style={{
              paddingHorizontal: responsiveWidth(4),
              paddingVertical: responsiveHeight(2),
              backgroundColor: "#FFFFFF"
            }}
          >
            <Text style={[styles.blackish, styles.fontBold, styles.title2]}>
              {details.title}
            </Text>
            <View
              style={{
                marginVertical: responsiveHeight(5)
              }}
            >
              <ReadMore
                numberOfLines={4}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
              >
                <Text
                  style={[
                    styles.blackish,
                    styles.fontMedium,
                    styles.regular,
                    { marginTop: responsiveHeight(8) }
                  ]}
                >
                  {details.description}
                </Text>
              </ReadMore>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: "#DCDCDC" }}>
              <Text
                style={[
                  styles.fontMedium,
                  styles.blackish,
                  styles.large,
                  { marginTop: responsiveHeight(5) }
                ]}
              >
                Available on:
              </Text>
              <View
                style={{
                  width: responsiveWidth(45),
                  flexDirection: "column",
                  alignContent: "center",
                  marginVertical: responsiveHeight(4),
                  borderWidth: 1,
                  borderColor: "#DCDCDC",
                  borderRadius: responsiveWidth(2),
                  paddingVertical: responsiveHeight(4),
                  paddingHorizontal: responsiveWidth(4)
                }}
              >
                <Icon name="logo-playstation" size={25} color="#484848" />
                <Text
                  style={[
                    styles.blackish,
                    styles.fontMedium,
                    styles.regular,
                    {
                      marginTop: responsiveHeight(1),
                      alignSelf: "flex-start"
                      //fontSize: responsiveFontSize(2.1)
                    }
                  ]}
                >
                  Playstation 4
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            zIndex: 3,
            height: responsiveHeight(12),
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderTopColor: "#DCDCDC"
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 20,
              marginVertical: responsiveHeight(1),
              marginHorizontal: responsiveWidth(3),
              width: responsiveWidth(30),
              justifyContent: "center"
            }}
          >
            <Text style={[styles.blackish, styles.fontMedium, styles.regular]}>
              {details.price} ksh
            </Text>
            <Text
              style={[
                styles.greyish,
                styles.fontLight,
                { fontSize: responsiveFontSize(2.1) }
              ]}
            >
              per day
            </Text>
          </View>
          <TouchableNativeFeedback
            //onPress={onPress}
            background={
              Platform.Version >= 21
                ? TouchableNativeFeedback.Ripple("#FFFFFF", true)
                : TouchableNativeFeedback.SelectableBackground()
            }
          >
            <View
              style={{
                flex: 2,
                //paddingVertical: 0,
                //paddingHorizontal: 15,
                marginVertical: responsiveHeight(1.7),
                marginHorizontal: responsiveWidth(6.2),
                width: responsiveWidth(3),
                borderRadius: responsiveWidth(1),
                //elevation: 3,
                backgroundColor: "#FF5A5F",
                justifyContent: "center"
              }}
            >
              <Text
                style={[
                  styles.fontMedium,
                  styles.regular,
                  { color: "#FFFFFF", textAlign: "center" }
                ]}
              >
                Check availability
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
