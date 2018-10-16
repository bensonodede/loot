import { createStackNavigator } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";

//import NameScreen from '../app/screens/signup/nameScreen.js';
//import CreatePassScreen from '../app/screens/signup/createPassScreen.js';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/Login";
import NameScreen from "../screens/nameScreen";
import PhoneNumScreen from "../screens/phoneNumScreen.js";
import PinScreen from "../screens/pinScreen";
import MapScreen from "../screens/mapScreen";

import PhoneNumLoginScreen from "../screens/phoneNumLoginScreen";
import locationPermissionScreen from "../screens/locationPermissionScreen";

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Name: NameScreen,
    Phone: PhoneNumScreen,
    PhoneLogin: PhoneNumLoginScreen,
    Login: LoginScreen,
    Pin: PinScreen
  },
  {
    initialRouteName: "Welcome",
    transitionConfig: getSlideFromRightTransition
  }
);
