import React from "react";
import { AsyncStorage, StatusBar, Linking, View, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Emoji from "react-native-emoji";
import firebase from "react-native-firebase";

import styles from "../config/styles";

const text = "Hello";
const phoneNumber = "+254724645546";
export default class PlayScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection("orders");

    this.unsubscribe = null;
    this.userUnsubscribe = null;
    this.state = {
      user: null,
      orders: [],
      loading: true
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.unsubscribe = this.ref
          .where("userID", "==", user._user.uid)
          .onSnapshot(this.onCollectionUpdate);
        this.setState({ user });
      } else {
        console.log("NO USER");
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    if (this.userUnsubscribe) this.userUnsubscribe();
  }

  onCollectionUpdate = querySnapshot => {
    const orders = [];
    querySnapshot.forEach(doc => {
      const { bookedDates, gameID } = doc.data();
      orders.push({
        key: doc.id,
        bookedDates,
        gameID
      });
    });
    this.setState(
      {
        orders,
        loading: false
      },
      () => {
        console.log(this.state);
      }
    );
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
            Plays.
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
        </View>
      </View>
    );
  }
}
