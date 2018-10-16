import React from "react";
import LocationView from "react-native-location-view";
import { View, StatusBar, PermissionsAndroid } from "react-native";
import FusedLocation from "react-native-fused-location";
import Permissions from "react-native-permissions";

export default class MapScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {
        latitude: "",
        longitude: ""
      },
      locationEnabled: null
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
        if (error.code == 2) {
          this.props.navigation.navigate("Permission");
        } else if (error.code == 3) {
          console.log(error);
        }
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }

  //!Location request times out in Geolocation button press
  //!Fix in package and patch.

  //async componentDidMount() {
  //  const answer = await Permissions.request("location")
  //    .then(response => {
  //      if (response) {
  //        console.log(response);
  //      }
  //    })
  //    .catch(error => {
  //      console.log(error);
  //    });
  //}

  static navigationOptions = {
    header: null
  };

  render() {
    const gameDetails = this.props.navigation.getParam("gameDetails");
    const dates = this.props.navigation.getParam("dates");

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <LocationView
          navigation={this.props.navigation}
          initialLocation={{
            latitude: -1.28333,
            longitude: 36.81667
          }}
          onLocationSelect={region => {
            this.props.navigation.navigate("Time", {
              gameDetails: gameDetails,
              dates: dates,
              location: region
            });
          }}
        />
      </View>
    );
  }
}
