import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import FeatherIcon from "react-native-vector-icons/Feather";
//import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

import OtherScreen from "../screens/otherScreen";
import FeedScreen from "../screens/feedScreen";
import ChatScreen from "../screens/chatScreen";
import DetailScreen from "../screens/detailScreen";
import CalendarScreen from "../screens/calendar";
import MapScreen from "../screens/mapScreen";
import TimeScreen from "../screens/timeScreen";
import PaymentScreen from "../screens/paymentScreen";
import ReviewScreen from "../screens/reviewScreen";
import PricingScreen from "../screens/pricingScreen";

const HomeStack = createStackNavigator({
  Feed: FeedScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <FeatherIcon
        name={"home"}
        size={responsiveFontSize(3.4)}
        color={"#FFFFFF"}
      />
    ) : (
      <FeatherIcon
        name={"home"}
        size={responsiveFontSize(3.2)}
        color={"#727272"}
      />
    )
};

const OtherStack = createStackNavigator({
  Other: OtherScreen
});

OtherStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <FeatherIcon
        name={"user"}
        size={responsiveFontSize(3.4)}
        color={"#FFFFFF"}
      />
    ) : (
      <FeatherIcon
        name={"user"}
        size={responsiveFontSize(3.2)}
        color={"#727272"}
      />
    )
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen
});

ChatStack.navigationOptions = {
  tabBarLabel: "Chat",

  tabBarIcon: ({ focused, tintColor }) =>
    focused ? (
      <FeatherIcon
        name={"message-circle"}
        size={responsiveFontSize(3.4)}
        color={"#FFFFFF"}
      />
    ) : (
      <FeatherIcon
        name={"message-circle"}
        size={responsiveFontSize(3.2)}
        color={"#727272"}
      />
    )
};
const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeStack,
    OtherStack,
    ChatStack
  },
  {
    shifting: true,
    activeTintColor: "#f0edf6",
    inactiveTintColor: "#3e2465",
    barStyle: { backgroundColor: "#000000" }
  }
);

export default createStackNavigator(
  {
    Tabs: TabNavigator,
    Detail: DetailScreen,
    Calendar: CalendarScreen,
    Map: MapScreen,
    Time: TimeScreen,
    Payment: PaymentScreen,
    Review: ReviewScreen,
    Pricing: PricingScreen
  },
  {
    initialRouteName: "Tabs",
    navigationOptions: {
      header: null
    }
  }
);
