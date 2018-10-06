import React from "react";
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Ripple from "react-native-material-ripple";
import LinearGradient from "react-native-linear-gradient";
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
          {/*<Image
            style={{
              height: responsiveHeight(50),
              width: responsiveWidth(100),
              position: "absolute",
              zIndex: 5,
              bottom: 0,
              left: 0
            }}
            source={require("../assets/transparent-fade-black-1.png")}
          />*/}
          <View>
            <LinearGradient
              locations={[0.05, 1]}
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
              style={{
                paddingTop: StatusBar.currentHeight,
                width: responsiveWidth(100),
                height: responsiveHeight(40)
              }}
            />
          </View>
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
              alignContent: "center",
              paddingLeft: responsiveWidth(5)
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: responsiveFontSize(-0.7),
                paddingBottom: responsiveFontSize(0.6)
              }}
            >
              <IonIcons
                name={"logo-playstation"}
                size={responsiveFontSize(2.5)}
                color={"#FFFFFF"}
                style={{
                  paddingHorizontal: responsiveWidth(2)
                }}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "CircularStd-Black",
                  fontSize: responsiveFontSize(2)
                }}
              >
                PS4
              </Text>
            </View>

            <View>
              <Text>
                <Text
                  style={[
                    styles.fontBlack,
                    { color: "#FFFFFF", fontSize: responsiveFontSize(2.2) }
                  ]}
                >
                  {details.price} ksh{" "}
                </Text>
                <Text
                  style={[
                    styles.fontLight,
                    { fontSize: responsiveFontSize(2.1), color: "#b7b7b7" }
                  ]}
                >
                  per day
                </Text>
              </Text>
            </View>
          </View>

          <View
            style={{
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
                  justifyContent: "center",
                  zIndex: 1
                }}
              >
                <Animatable.View
                  style={{
                    width: responsiveWidth(45),
                    height: responsiveHeight(8),
                    borderRadius: responsiveWidth(1.5),
                    position: "absolute",
                    opacity: 0.5,
                    top: 0,
                    zIndex: -1,
                    bottom: 0,
                    left: 0,
                    right: 0
                  }}
                  animation={{
                    0: {
                      opacity: 0.6,
                      scale: 1.2
                    },
                    0.25: {
                      opacity: 0.6,
                      scale: 1.8
                    },
                    0.5: {
                      opacity: 0.6,
                      scale: 2.2
                    },
                    0.75: {
                      opacity: 0.6,
                      scale: 2.4
                    },
                    1: {
                      opacity: 0.6,
                      scale: 2.6
                    }
                  }}
                  //delay={delay}
                  duration={8500}
                  direction="alternate"
                  easing="ease-in-out"
                  iterationCount="infinite"
                  useNativeDriver
                >
                  <Image
                    style={{
                      width: responsiveWidth(45),
                      height: responsiveHeight(8),
                      borderRadius: responsiveWidth(1.5),
                      alignSelf: "center"
                    }}
                    resizeMode={"cover"}
                    source={require("../assets/greenish.jpg")}
                  />
                </Animatable.View>
                <Text
                  style={[
                    styles.fontMedium,
                    styles.regular,
                    {
                      color: "#FFFFFF",
                      textAlign: "center",
                      alignSelf: "center"
                      //position: "absolute",
                      //top: responsiveHeight(2)
                      //bottom: 0,
                      //right: 0,
                      //left: 0
                    }
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
