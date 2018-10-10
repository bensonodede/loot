import React from "react";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NetInfo
} from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Moment from "moment";
import firebase from "react-native-firebase";
import FlashMessage from "react-native-flash-message";

import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "../config/styles";
export default class ReviewScreen extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("orders");
    this.state = {
      isConnected: true,
      userID: "",
      gameID: "",
      deliveryTime: "",
      startDate: "",
      endDate: "",
      lat: "",
      lon: ""
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );

    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ isConnected }, () => {
        console.log(this.state);
      });
    });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
    this.disconnected = false;
  }

  _noInternetAlert() {
    this.refs.fm1LocalInstance.showMessage({
      message: "No internet connection",
      type: "warning",
      backgroundColor: "#d93900",
      color: "#FFFFFF"
    });
  }

  _yesInternetAlert() {
    this.refs.fm1LocalInstance.showMessage({
      message: "Connected",
      type: "default",
      backgroundColor: "#00A699",
      color: "#FFFFFF"
    });
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected }, () => {
        this._noInternetAlert();
      });
    }
  };

  _addOrder = () => {
    const {
      userID,
      gameID,
      deliveryTime,
      startDate,
      endDate,
      lat,
      lon
    } = this.state;
    const loc = new firebase.firestore.GeoPoint(lat, lon);
    console.log(loc);
    this.ref
      .add({
        userID: userID,
        gameID: gameID,
        deliveryTime: deliveryTime,
        bookedDates: {
          startDate: startDate,
          endDate: endDate
        },
        deliveryLocation: loc
      })
      .then(ref => {
        console.log(ref);
        this.props.navigation.navigate("Success");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const gameDetails = this.props.navigation.getParam("gameDetails");
    const dates = this.props.navigation.getParam("dates");
    const location = this.props.navigation.getParam("location");
    const time = this.props.navigation.getParam("time");

    const firstDay = Moment(dates.startDate);
    const lastDay = Moment(dates.untilDate);
    const daysNum = lastDay.diff(firstDay, "days") + 1;

    const startDate = Moment(dates.startDate).format("MMM DD");
    const untilDate = Moment(dates.untilDate).format("MMM DD");

    const totalPrice = daysNum * gameDetails.price;

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
                {daysNum} days booked for {gameDetails.title}.
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
                {startDate} - {untilDate}
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
                {time}
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
                {totalPrice} ksh
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Pricing", {
                  daysNum: daysNum,
                  title: gameDetails.title,
                  price: gameDetails.price,
                  totalPrice: totalPrice
                });
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
            onPressIn={() => {
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  this.setState(
                    {
                      userID: user._user.uid,
                      gameID: gameDetails.key,
                      deliveryTime: time,
                      startDate: dates.startDate,
                      endDate: dates.untilDate,
                      lat: location.latitude,
                      lon: location.longitude
                    },
                    () => {
                      if (this.state.isConnected) {
                        this._addOrder();
                        console.log(this.state);
                      } else {
                        this._noInternetAlert();
                      }
                    }
                  );
                }
              });
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
        <FlashMessage
          ref="fm1LocalInstance"
          position="bottom"
          hideOnPress={true}
          animated={true}
          autoHide={true}
          duration={4000}
        />
      </View>
    );
  }
}
