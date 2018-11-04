import React from "react";
import LocationView from "react-native-location-view";
import {
  View,
  StatusBar,
  PermissionsAndroid,
  ActivityIndicator
} from "react-native";
import SystemSetting from "react-native-system-setting";
import Permissions from "react-native-permissions";
import FusedLocation from "react-native-fused-location";
import { NavigationEvents } from "react-navigation";

export default class MapScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      locationFound: null,
      locationEnabled: null,
      locationPermission: null
    };
  }

  _turnLocationOn() {
    SystemSetting.isLocationEnabled().then(enable => {
      if (enable) {
        console.log("Location is currently " + enable);
        this.setState({ locationEnabled: true }, () => {
          this._enableLocationPermission();
          console.log(this.state);
        });
      } else {
        this.props.navigation.navigate("Permission");
        console.log("Location is currently " + enable);
      }
    });
  }

  async _enableLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("ALLOWED");
        this.setState({ locationPermission: true }, () => {
          this._findMe();
          console.log(this.state);
        });
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.log(err);
    }
  }

  _findMe() {
    FusedLocation.setLocationPriority(FusedLocation.Constants.HIGH_ACCURACY);
    // Get location once.
    const location = FusedLocation.getFusedLocation();

    location.then(
      value => {
        console.log("fulfilled:", value);
        this.setState({ lat: value.latitude, lon: value.longitude }, () => {
          this.setState({ locationFound: true });
        });
      },
      error => {
        console.log(error);
        if (error == "Error: No location provider found.") {
          console.log("Please enable location");
        } else if (error == "Error: Appropriate permissions not given.") {
          console.log("Enable permissions");
        }
      }
    );
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const gameDetails = this.props.navigation.getParam("gameDetails");
    const dates = this.props.navigation.getParam("dates");

    const {
      locationEnabled,
      locationPermission,
      locationFound,
      lat,
      lon
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onDidFocus={payload => {
            this._turnLocationOn();
          }}
        />

        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />

        <LocationView
          navigation={this.props.navigation}
          initialLocation={{
            latitude: locationFound ? lat : -1.28333,
            longitude: locationFound ? lon : 36.81667
          }}
          onLocationSelect={region => {
            console.log(region);
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
