import { createSwitchNavigator } from "react-navigation";

import AuthStackNavigator from "./authStackNavigator";
import MainTabNavigator from "./mainTabNavigator";
import AuthLoadingNavigator from "./authLoadingNavigator";
import successNavigator from "./successNavigator";

export default createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingNavigator,
    //Auth: AuthStackNavigator,
    Main: MainTabNavigator,
    Success: successNavigator
  },
  {
    initialRouteName: "Success"
  }
);
