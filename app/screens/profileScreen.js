import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import OctIcons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import styles from "../config/styles";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user }, () => {
          console.log(this.state);
        });
      } else {
        console.log("NO USER");
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return (
      <ScrollView
        style={[
          styles.container,
          {
            paddingTop: StatusBar.currentHeight + responsiveHeight(6),
            paddingLeft: responsiveWidth(6),
            paddingRight: responsiveWidth(6)
          }
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          {/*Profile name*/}
          <View
            style={{
              justifyContent: "center"
            }}
          >
            <Text
              style={[
                styles.fontMedium,
                {
                  fontSize: responsiveFontSize(4),
                  color: "#484848",
                  alignSelf: "center",
                  textAlign: "center"
                }
              ]}
            >
              Benson
            </Text>
          </View>
          {/*Profile name*/}
          {/*Profile badge*/}
          <View
            style={{
              width: responsiveWidth(15),
              height: responsiveWidth(15),
              borderRadius: responsiveWidth(15),
              backgroundColor: "#8c8c8c",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            <OctIcons
              name={"person"}
              size={responsiveFontSize(6.5)}
              color={"#484848"}
              style={{
                top: responsiveWidth(2.4)
              }}
            />
          </View>
          {/*Profile badge*/}
        </View>
        <View style={{ flex: 1, paddingTop: responsiveHeight(8) }}>
          <Ripple>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: responsiveHeight(3.5),
                paddingHorizontal: responsiveWidth(2),
                borderBottomWidth: 1,
                borderColor: "#DCDCDC"
              }}
            >
              <Text
                style={{ fontSize: responsiveFontSize(2.8), color: "#484848" }}
              >
                Notifications
              </Text>
              <SimpleLineIcons
                size={responsiveFontSize(3.2)}
                name={"bell"}
                color={"#484848"}
              />
            </View>
          </Ripple>
          <Ripple>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: responsiveHeight(3.5),
                paddingHorizontal: responsiveWidth(2),
                borderBottomWidth: 1,
                borderColor: "#DCDCDC"
              }}
            >
              <Text
                style={{ fontSize: responsiveFontSize(2.8), color: "#484848" }}
              >
                Settings
              </Text>
              <SimpleLineIcons
                size={responsiveFontSize(3.2)}
                name={"settings"}
                color={"#484848"}
              />
            </View>
          </Ripple>
        </View>
        {/*<Button
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                console.log("SIGNED OUT");
              })
              .catch(error => console.log(error));
          }}
          title={"SIGN OUT"}
        />*/}
      </ScrollView>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
