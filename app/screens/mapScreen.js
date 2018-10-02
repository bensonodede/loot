import React from "react";
import LocationView from "react-native-location-view";
import { View, StatusBar } from "react-native";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
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
            console.log(region);
          }}
        />
      </View>
    );
  }
}
