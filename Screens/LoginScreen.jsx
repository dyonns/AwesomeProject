import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

import BgImage from "../images/Photo_min.jpg";

const LoginScreen = () => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onLogin = () => {
    // Alert.alert("Credentials", `${name} + ${password}`);
    navigateToCreatePostsScreen();
  };

  const navigateToRegistration = () => {
    navigation.navigate("RegistrationScreen");
  };

  const navigateToCreatePostsScreen = () => {
    navigation.navigate("CreatePostsScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={BgImage}
        // resizeMode="contain"
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.container,
              marginTop: isShowKeyboard ? -250 : -470,
            }}
          >
            <Text style={styles.title}>Увійти</Text>

            <TextInput
              style={[styles.input, isFocusedName && styles.inputActive]}
              placeholder="Введіть ім'я користувача"
              value={name}
              onChangeText={setName}
              onFocus={
                (() => setIsFocusedName(true), () => setIsShowKeyboard(true))
              }
              onBlur={
                (() => setIsFocusedName(false), () => setIsShowKeyboard(false))
              }
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[isFocusedPassword && styles.inputActive]}
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry={!isPasswordVisible}
                onFocus={
                  (() => setIsFocusedPassword(true),
                  () => setIsShowKeyboard(true))
                }
                onBlur={
                  (() => setIsFocusedPassword(false),
                  () => setIsShowKeyboard(false))
                }
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Text style={styles.showPasswordButtonText}>
                  {isPasswordVisible ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
              <Text style={styles.loginButtonText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerLink}
              onPress={navigateToRegistration}
            >
              <Text style={styles.registerLinkText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    // marginTop: "90%",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    fontFamily: "Roboto",
  },

  title: {
    marginTop: 32,
    textAlign: "center",

    fontSize: 30,

    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
  },

  input: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    padding: 16,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  inputActive: {
    borderColor: "#FF6C00",
  },

  passwordInputContainer: {
    margin: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 100,
    position: "relative",

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  showPasswordButton: {
    position: "absolute",
    left: 290,
    top: 15,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: 0,
  },

  loginButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    marginTop: 43,
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },

  registerLink: {
    marginTop: 16,
    alignItems: "center",
  },
  registerLinkText: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
