import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import { iconPlas, iconUser, iconGrid } from "./icons";
import CreateScreen from "./Screens/CreateScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Home from "./Screens/Home";

const Tabs = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer initialRouteName="CreatePostsScreen">
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          // tabBarStyle: { backgroundColor: "red" },
          tabBarLabel: () => null,

          tabBar: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "ProfileScreen") {
              iconName = focused ? iconGrid : iconGrid;
            } else if (route.name === "CreateScreen") {
              iconName = focused ? iconPlas : iconPlas;
            } else if (route.name === "Home") {
              iconName = focused ? iconUser : iconUser;
            }
            return <SvgXml xml={iconName} style={styles.avatarIcon} />;
          },

          tabBarStyle: {
            display: route.name === "CreateScreen" ? "none" : "flex",
          },
          tabBarItemStyle: {
            padding: 0,
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        })}
      >
        <Tabs.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="CreateScreen"
          component={CreateScreen}
        />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  avatarIcon: {
    width: 34,
    height: 34,
    fill: "none",
    stroke: "#BDBDBD",
  },
  qwe: {
    backgroundColor: "red",
  },
});
