import { createStackNavigator } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";

//import NameScreen from '../app/screens/signup/nameScreen.js';
//import CreatePassScreen from '../app/screens/signup/createPassScreen.js';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/Login";
import NameScreen from "../screens/nameScreen";
import PhoneNumScreen from "../screens/phoneNumScreen.js";
import MapScreen from "../screens/mapScreen";
import CalendarScreen from "../screens/calendar";
import TimeScreen from "../screens/timeScreen";
import FeedScreen from "../screens/feedScreen";
import DetailScreen from "../screens/detailScreen";
import PinScreen from "../screens/pinScreen";
import SomeScreen from "../screens/someScreen";
import PhoneNumLoginScreen from "../screens/phoneNumLoginScreen";
import RadioButtonScreen from "../screens/radioButton";

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Name: NameScreen,
    Phone: PhoneNumScreen,
    PhoneLogin: PhoneNumLoginScreen,
    Login: LoginScreen,
    Map: MapScreen,
    Calendar: CalendarScreen,
    Time: TimeScreen,
    Radio: RadioButtonScreen,
    Feed: FeedScreen,
    Detail: DetailScreen,
    Pin: PinScreen,
    Some: SomeScreen
  },
  {
    initialRouteName: "Time",
    transitionConfig: getSlideFromRightTransition
  }
);
