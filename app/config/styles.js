/* These are our global styles*/
import { StyleSheet, StatusBar } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
    backgroundColor: "#FFFFFF"
  },

  /******* Font sizes *******/

  title1: {
    fontSize: 44
  },
  title2: {
    fontSize: 30
  },
  title3: {
    fontSize: 24
  },
  large: {
    fontSize: 19
  },
  regular: {
    fontSize: 16.5
  },
  small: {
    fontSize: 14
  },
  micro: {
    fontSize: 44
  },

  /******* Font families *******/
  fontBold: {
    fontFamily: "CircularStd-Bold"
  },
  fontBlack: {
    fontFamily: "CircularStd-Black"
  },
  fontMedium: {
    fontFamily: "CircularStd-Medium"
  },
  fontLight: {
    //fontFamily: "CircularStd-Book"
    fontFamily: "Montserrat-Regular"
  },

  /******* Colors go here *******/

  redish: {
    color: "#FF5A5F"
  },
  greenish: {
    color: "#00A699"
  },
  orangeish: {
    color: "#FC642D"
  },
  blackish: {
    color: "#484848"
  },
  greyish: {
    color: "#767676"
  }
});
