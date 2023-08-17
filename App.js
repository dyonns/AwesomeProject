import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { useFonts } from "expo-font";
import AppNavigator from "./AppNavigator";

import BgImage from "./images/Photo_min.jpg";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BgImage}
        resizeMode="contain"
        style={styles.image}
      >
        <AppNavigator />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
