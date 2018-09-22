import { AppRegistry, YellowBox } from "react-native";

import { name as appName } from "./app.json";
import App from "./App";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent(appName, () => App);
