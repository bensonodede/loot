import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;
var images = [
  {
    id: 1,
    src: {
      uri:
        "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_100/v1533923663/3012241-god_of_war_ps4_nncyla.jpg"
    }
  },
  {
    id: 2,
    src: {
      uri:
        "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_100/v1533923273/2941053-img_4151_super_yvqvmq.jpg"
    }
  }
];

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    //title: 'Welcome to the app!',
    header: null
  };

  render() {
    const { navigation } = this.props;
    const imageUrl = navigation.getParam("imageUrl", "");
    const imageID = navigation.getParam("imageID", "NoID");

    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            top: 0,
            height: responsiveHeight(76.4),
            width: SCREEN_WIDTH,
            padding: 0
          }}
        >
          <Text>List item {imageID}.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
