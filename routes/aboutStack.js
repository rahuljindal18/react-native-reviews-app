import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../screens/about";

const screens = {
  About: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "About",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "lightgreen",
      height: 100,
    },
    headerTintColor: "#444",
  },
});

export default createAppContainer(AboutStack);
