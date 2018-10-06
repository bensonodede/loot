import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./authStackNavigator";
import MainTabNavigator from "./mainTabNavigator";
import AuthLoadingNavigator from "./authLoadingNavigator";

export default createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingNavigator,
    //Auth: AuthStackNavigator
    Main: MainTabNavigator
  },
  {
    //initialRouteName: 'AuthLoading',
  }
);
