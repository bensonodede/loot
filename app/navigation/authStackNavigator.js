import { createStackNavigator } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";

import WelcomeScreen from "../screens/WelcomeScreen";
import NameScreen from "../screens/nameScreen";
import PhoneNumScreen from "../screens/phoneNumScreen.js";
import PhoneNumLoginScreen from "../screens/phoneNumLoginScreen";
import PinScreen from "../screens/pinScreen";

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Name: NameScreen,
    Phone: PhoneNumScreen,
    PhoneLogin: PhoneNumLoginScreen,
    Pin: PinScreen
  },
  {
    initialRouteName: "Welcome",
    transitionConfig: getSlideFromRightTransition
  }
);
