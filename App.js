import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  // const isAuthenticated = false;
  const isAuthenticated = true;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
