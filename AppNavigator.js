import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import "react-native-gesture-handler";

const MainStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer initialRouteName="LoginScreen">
      <MainStack.Navigator>
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            title: "",
            headerLeft: null,
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
