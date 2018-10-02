import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ScrollView
} from "react-native";
import Ripple from "react-native-material-ripple";
import IonIcons from "react-native-vector-icons/Ionicons";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

import RadioButtonGroup from "./radioButtonGroup";
import styles from "../config/styles";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Colors = {
  RC_GREEN: "#80bc2a",
  RC_DARK_GREEN: "#70a524"
};

const morningTimes = [
  { id: 0, values: { window: "8 AM - 9 AM", switchBool: false } },
  { id: 1, values: { window: "8 AM - 9 AM", switchBool: false } },
  { id: 2, values: { window: "8 AM - 9 AM", switchBool: false } },
  { id: 3, values: { window: "8 AM - 9 AM", switchBool: false } }
];

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      types1: [{ label: "Orange", value: 0 }, { label: "Yellow", value: 1 }],
      value1: 0,
      value1Index: 0,
      types2: [
        { label: "Blue", value: 0 },
        { label: "Purple", value: 1 },
        { label: "Green", value: 2 }
      ],
      value2: 0,
      value2Index: 0,
      types3: [
        { label: "Red", value: 0 },
        { label: "White", value: 1 },
        { label: "Blue", value: 2 }
      ],
      value3: 0,
      value3Index: 0
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(key, index) {
    let update = {};
    update[key] = index;
    this.setState(update);
  }

  //!! Add ICONS for morning, afternoon and evening
  render() {
    return (
      <ScrollView
        style={[styles.container, { paddingTop: StatusBar.currentHeight }]}
      >
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

        <Text
          style={[
            styles.fontBold,
            styles.blackish,
            {
              fontSize: responsiveFontSize(4),
              marginTop: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(3)
            }
          ]}
        >
          When do we deliver?
        </Text>
        <RadioButtonGroup
          valueKey="value1Index"
          onPress={this.onPress}
          options={this.state.types1}
          valueIndex={this.state.value1Index}
        />
        <RadioButtonGroup
          valueKey="value2Index"
          onPress={this.onPress}
          options={this.state.types2}
          valueIndex={this.state.value2Index}
        />
        <RadioButtonGroup
          valueKey="value3Index"
          onPress={this.onPress}
          options={this.state.types3}
          valueIndex={this.state.value3Index}
        />
        <Text>
          Types1 selected color:{" "}
          {this.state.types1[this.state.value1Index].label}
        </Text>
        <Text>
          Types2 selected color:{" "}
          {this.state.types2[this.state.value2Index].label}
        </Text>
        <Text>
          Types3 selected color:{" "}
          {this.state.types3[this.state.value3Index].label}
        </Text>
        {/*<FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={this.renderHeader}
          data={this.state.morningData}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View
              style={{ flex: 1, flexDirection: "row", backgroundColor: "red" }}
            >
              <Text>{item.values.window}</Text>
             
            </View>
          )}
        />*/}
      </ScrollView>
    );
  }
}

const styles1 = StyleSheet.create({
  button: {
    backgroundColor: "#000000"
  },
  subSeparator: {
    borderWidth: 10,
    backgroundColor: "#000000"
  }
});
