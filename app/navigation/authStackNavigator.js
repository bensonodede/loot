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

export default createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Name: NameScreen,
    Phone: PhoneNumScreen,
    Login: LoginScreen,
    Map: MapScreen,
    Calendar: CalendarScreen,
    Time: TimeScreen,
    Feed: FeedScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Phone",
    transitionConfig: getSlideFromRightTransition
  }
);
