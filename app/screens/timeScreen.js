import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import styles from "../config/styles";

const items = [
  {
    name: "Morning",
    id: 0,
    children: [
      {
        name: "8 - 9 AM",
        id: 10
      },
      {
        name: "9 - 10 AM",
        id: 17
      },
      {
        name: "10 - 11 AM",
        id: 13
      }
    ]
  },
  {
    name: "Evening",
    id: 1,
    children: [
      {
        name: "4 PM - 5 PM",
        id: 20
      },
      {
        name: "5 PM - 6 PM",
        id: 21
      },
      {
        name: "6 PM - 7 PM",
        id: 22
      },
      {
        name: "7 PM - 8 PM",
        id: 23
      },
      {
        name: "8 PM - 9 PM",
        id: 24
      }
    ]
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: []
    };
  }
  static navigationOptions = {
    header: null
  };
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title3, styles.fontBold, styles.blackish]}>
          When do we deliver?
        </Text>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Choose the time..."
          single={true}
          hideSearch={true}
          showDropDowns={false}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          styles={{ subSeparator: styles.subSeparator, button: styles1.button }}
        />
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
  }
});
