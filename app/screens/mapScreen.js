import React from "react";
import LocationView from "react-native-location-view";
import { View, StatusBar } from "react-native";

export default class MapScreen extends React.Component {
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
