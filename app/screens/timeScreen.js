import React, { Component } from "react";
import {
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BoxShadow } from "react-native-shadow";

import IonIcons from "react-native-vector-icons/Ionicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import styles from "../config/styles";

class RadioButton extends Component {
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#DCDCDC",
          marginHorizontal: responsiveWidth(2)
        }}
      >
        <Ripple
          onPress={this.props.onClick}
          activeOpacity={0.8}
          style={styles1.radioButton}
        >
          <Text style={[styles1.label, { color: this.props.button.color }]}>
            {this.props.button.label}
          </Text>
          <View
            style={[
              styles1.radioButtonHolder,
              {
                height: this.props.button.size,
                width: this.props.button.size,
                borderColor: this.props.button.color
              }
            ]}
          >
            {this.props.button.selected ? (
              <View
                style={[
                  styles1.radioIcon,
                  {
                    height: this.props.button.size / 2,
                    width: this.props.button.size / 2,
                    backgroundColor: this.props.button.color
                  }
                ]}
              />
            ) : null}
          </View>
        </Ripple>
      </View>
    );
  }
}

export default class TimeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();

    this.state = {
      radioItems: [
        {
          label: "8 AM - 9 AM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "9 AM - 10 AM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "10 AM - 11 AM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "11 AM - 12 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "12 PM - 1 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "1 PM - 2 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "2 PM - 3 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "3 PM - 4 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "4 PM - 5 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "5 PM - 6 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "6 PM - 7 PM",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        }
      ],
      selectedItem: ""
    };
  }

  componentDidMount() {
    this.state.radioItems.map(item => {
      if (item.selected == true) {
        this.setState({ selectedItem: item.label });
      }
    });
  }

  changeActiveRadioButton(index) {
    console.log(index);
    this.state.radioItems.map(item => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      console.log(this.state.radioItems);
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  render() {
    const shadowOpt = {
      width: responsiveWidth(100),
      height: responsiveHeight(12),
      side: "top",
      //height: 170,
      color: "#000",
      border: responsiveHeight(1),
      radius: 0,
      opacity: 0.06,
      x: 5,
      y: 0,
      style: {
        position: "absolute",
        bottom: 0
        //zIndex: 3
      }
    };
    return (
      <View>
        <ScrollView>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={"#FFFFFF"}
            animated
          />
          <View
            style={[
              styles.container,
              {
                paddingTop: StatusBar.currentHeight + responsiveHeight(1),
                flex: 1,
                paddingBottom: responsiveHeight(11.8)
              }
            ]}
          >
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
                    marginBottom: responsiveHeight(2),
                    paddingHorizontal: responsiveWidth(3)
                  }
                ]}
              >
                When do we deliver?
              </Text>
            </View>
            <View style={{ alignContent: "center" }}>
              <View
                style={{
                  justifyContent: "flex-start",
                  paddingHorizontal: responsiveWidth(5),
                  paddingTop: responsiveHeight(4),
                  paddingBottom: responsiveHeight(4),
                  flexDirection: "row"
                }}
              >
                <FeatherIcons
                  name={"sunrise"}
                  size={responsiveFontSize(4)}
                  color={"#484848"}
                />
                <Text
                  style={{
                    color: "#484848",
                    fontSize: responsiveFontSize(3.2),
                    fontFamily: "CircularStd-Medium",
                    paddingHorizontal: responsiveWidth(4.8)
                  }}
                >
                  Morning
                </Text>
              </View>
              {this.state.radioItems.map((item, key) => {
                if (key <= 3) {
                  return (
                    <RadioButton
                      key={key}
                      button={item}
                      onClick={this.changeActiveRadioButton.bind(this, key)}
                    />
                  );
                } else {
                  return null;
                }
              })}
              <View
                style={{
                  justifyContent: "flex-start",
                  paddingHorizontal: responsiveWidth(5),
                  paddingTop: responsiveHeight(4),
                  paddingBottom: responsiveHeight(4),
                  flexDirection: "row"
                }}
              >
                <FeatherIcons
                  name={"sun"}
                  size={responsiveFontSize(4)}
                  color={"#484848"}
                />
                <Text
                  style={{
                    color: "#484848",
                    fontSize: responsiveFontSize(3.2),
                    fontFamily: "CircularStd-Medium",
                    paddingHorizontal: responsiveWidth(4.8)
                  }}
                >
                  Afternoon
                </Text>
              </View>
              {this.state.radioItems.map((item, key) => {
                if (key >= 4 && key < 8) {
                  return (
                    <RadioButton
                      key={key}
                      button={item}
                      onClick={this.changeActiveRadioButton.bind(this, key)}
                    />
                  );
                } else {
                  return null;
                }
              })}
              <View
                style={{
                  justifyContent: "flex-start",
                  paddingHorizontal: responsiveWidth(5),
                  paddingTop: responsiveHeight(4),
                  paddingBottom: responsiveHeight(4),
                  flexDirection: "row"
                }}
              >
                <FeatherIcons
                  name={"moon"}
                  size={responsiveFontSize(4)}
                  color={"#484848"}
                />
                <Text
                  style={{
                    color: "#484848",
                    fontSize: responsiveFontSize(3.2),
                    fontFamily: "CircularStd-Medium",
                    paddingHorizontal: responsiveWidth(4.8)
                  }}
                >
                  Evening
                </Text>
              </View>
              {this.state.radioItems.map((item, key) => {
                if (key >= 8) {
                  return (
                    <RadioButton
                      key={key}
                      button={item}
                      onClick={this.changeActiveRadioButton.bind(this, key)}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </View>
          </View>
        </ScrollView>
        <BoxShadow setting={shadowOpt}>
          <View
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(12),
              backgroundColor: "#FFFFFF",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                width: responsiveWidth(30),
                alignContent: "center",
                paddingLeft: responsiveWidth(8),
                paddingRight: responsiveWidth(5)
              }}
            >
              <View style={{ flexDirection: "column" }}>
                {this.state.selectedItem ? (
                  <Text
                    style={[
                      styles.fontMedium,
                      { fontSize: responsiveFontSize(2.4), color: "#484848" }
                    ]}
                  >
                    {this.state.selectedItem}
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.fontMedium,
                      { fontSize: responsiveFontSize(2.4), color: "#636c72" }
                    ]}
                  >
                    Please schedule the delivery time
                  </Text>
                )}
                {/*<Text
                  style={[
                    styles.fontBlack,
                    { color: "#484848", fontSize: responsiveFontSize(2.2) }
                  ]}
                >
                  Delivery Time:
                </Text>
                <Text
                  style={[
                    styles.fontLight,
                    { fontSize: responsiveFontSize(2.1), color: "#484848" }
                  ]}
                >
                  Morning: 9 AM - 10 AM
                </Text>*/}
              </View>
            </View>

            <View
              style={{
                borderRadius: responsiveWidth(1.5),
                paddingRight: responsiveWidth(5)
              }}
            >
              <Ripple
                rippleColor={"#FFFFFF"}
                rippleContainerBorderRadius={responsiveWidth(1.5)}
                onPress={() => {
                  //this.props.navigation.navigate("Calendar");
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(30),
                    height: responsiveHeight(8),
                    borderRadius: responsiveWidth(1.5),
                    paddingVertical: responsiveHeight(2),
                    backgroundColor: "#00A699",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={[
                      styles.fontMedium,
                      styles.regular,
                      {
                        color: "#FFFFFF",
                        textAlign: "center",
                        alignSelf: "center"
                      }
                    ]}
                  >
                    Save
                  </Text>
                </View>
              </Ripple>
            </View>
          </View>
        </BoxShadow>
      </View>
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
  },
  radioButton: {
    flexDirection: "row",
    paddingVertical: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(3),
    alignItems: "center",
    justifyContent: "space-between"
  },

  radioButtonHolder: {
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  radioIcon: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  label: {
    fontFamily: "CircularStd-Medium",
    marginLeft: 10,
    fontSize: responsiveFontSize(2.6)
  },

  selectedTextHolder: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center"
  },

  selectedText: {
    fontSize: 18,
    color: "white"
  }
});
