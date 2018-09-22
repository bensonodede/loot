import React from "react";
import LocationView from "react-native-location-view";
import { View } from "react-native";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LocationView
          initialLocation={{
            latitude: -1.28333,
            longitude: 36.81667
          }}
          onLocationSelect={region => {
            console.log(region);
          }}
        />
      </View>
    );
  }
}
