import React from "react";
import LocationView from "react-native-location-view";
import {
  View,
  StatusBar,
  PermissionsAndroid,
  ActivityIndicator
} from "react-native";
import SystemSetting from "react-native-system-setting";

export default class MapScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {
        latitude: "",
        longitude: ""
      },
      permission: null
    };
  }

  _findMe = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState(
          {
            position: { latitude: latitude, longitude: longitude }
          },
          () => {
            console.log(this.state);
          }
        );
      },
      error => {
        console.log(error);
        if (error.code == 2) {
          this.props.navigation.navigate("Permission");
        } else if (error.code == 3) {
          console.log(error);
        }
      },
      { enableHighAccuracy: false }
    );
  };

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount() {
    // SystemSetting.isLocationEnabled().then(enable => {
    //   enable
    //     ? this.requestLocationPermission()
    //     : this.props.navigation.navigate("Permission");
    // });
  }
  //!Location request times out in Geolocation button press
  //!Fix in package and patch.

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
