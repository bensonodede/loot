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
import Ripple from "react-native-material-ripple";

import IonIcons from "react-native-vector-icons/Ionicons";
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
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={"rgba(0, 0, 0, 0.2)"}
            animated
          />
          <View
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              borderRadius: responsiveWidth(15),
              position: "absolute",
              top: responsiveHeight(5),
              left: 0,
              zIndex: 9
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
                  color={"#FFFFFF"}
                  style={{
                    alignSelf: "center",
                    paddingHorizontal: responsiveWidth(2)
                  }}
                />
              </View>
            </Ripple>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              height: responsiveHeight(90),
              width: responsiveWidth(100)
            }}
          >
            <Image
              source={{ uri: details.imageUrl }}
              style={{
                flex: 1,
                height: responsiveHeight(90),
                width: responsiveWidth(100),
                position: "absolute",
                top: 0,
                left: 0
              }}
              resizeMode={"cover"}
            />
          </View>
          <Image
            style={{
              height: responsiveHeight(50),
              width: responsiveWidth(100),
              position: "absolute",
              zIndex: 5,
              bottom: 0,
              left: 0
            }}
            source={require("../assets/transparent-fade-black-1.png")}
          />
          {/*<View
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
          </View>*/}
        </View>
        <View
          style={{
            zIndex: 3,
            height: responsiveHeight(15),
            backgroundColor: "#000000",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopWidth: 2,
            borderTopColor: "rgba(246,246,246,0.2)"
          }}
        >
          <View
            style={{
              flex: 1,
              width: responsiveWidth(30),
              justifyContent: "center",
              paddingLeft: responsiveWidth(5)
            }}
          >
            <Text
              style={[
                styles.fontMedium,
                { color: "#FFFFFF", fontSize: responsiveFontSize(2.5) }
              ]}
            >
              {details.price} ksh
            </Text>
            <Text
              style={[
                styles.fontLight,
                { fontSize: responsiveFontSize(2.1), color: "#b7b7b7" }
              ]}
            >
              per day
            </Text>
          </View>

          <View
            style={{
              //width: responsiveWidth(15),
              //height: responsiveWidth(15),
              borderRadius: responsiveWidth(1.5),
              paddingRight: responsiveWidth(5)
            }}
          >
            <Ripple
              rippleColor={"#FFFFFF"}
              rippleContainerBorderRadius={responsiveWidth(1.5)}
              onPress={() => {
                this.props.navigation.navigate("Calendar");
              }}
            >
              <View
                style={{
                  width: responsiveWidth(45),
                  height: responsiveHeight(8),
                  borderRadius: responsiveWidth(1.5),
                  paddingVertical: responsiveHeight(2),
                  backgroundColor: "rgba(255,255,255,0.2)",
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
            </Ripple>
          </View>
        </View>
      </View>
    );
  }
}
