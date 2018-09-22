import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
//import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

import OtherScreen from "../screens/otherScreen";
import HomeScreen from "../screens/homeScreen";
import ProductScreen from "../screens/productScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Product: ProductScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
  /*tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),*/
};

const OtherStack = createStackNavigator({
  Other: OtherScreen
});

OtherStack.navigationOptions = {
  tabBarLabel: "Other"
  /*tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),*/
};

export default createBottomTabNavigator({
  HomeStack,
  OtherStack
});
