import React, { Component } from "react";
import { ScrollView, View, StatusBar, Text, StyleSheet } from "react-native";
import Ripple from "react-native-material-ripple";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BoxShadow } from "react-native-shadow";

import IonIcons from "react-native-vector-icons/Ionicons";
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

export default class PaymentScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      radioItems: [
        {
          label: "Cash on delivery",
          size: responsiveFontSize(4.5),
          color: "#636c72",
          selected: false
        },

        {
          label: "M-Pesa on delivery",
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

    //console.log(this.state.radioItems[index]);
    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      console.log(this.state.radioItems);
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  render() {
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
              Payment method
            </Text>
          </View>
          {/************ List Container ***********/}
          <View style={{ paddingHorizontal: responsiveWidth(3) }}>
            {this.state.radioItems.map((item, key) => {
              return (
                <RadioButton
                  key={key}
                  button={item}
                  onClick={this.changeActiveRadioButton.bind(this, key)}
                />
              );
            })}
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
            onPressIn={() => {}}
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
