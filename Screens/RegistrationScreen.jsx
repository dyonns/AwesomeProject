import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { SvgXml } from "react-native-svg";

import BgImage from "../images/Photo_min.jpg";
import { iconAdd, iconEdit } from "../icons";

const RegistrationScreen = () => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={BgImage} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.container,
              marginTop: isShowKeyboard ? -360 : -580,
            }}
          >
            <View style={styles.avatar}>
              <SvgXml xml={iconAdd} style={styles.avatarIcon} />
              {/* <SvgXml xml={iconEdit} style={styles.avatarIconEdit} /> */}
            </View>
            <Text style={styles.title}>Реєстрація</Text>

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

            <TextInput
              style={[styles.input, isFocusedEmail && styles.inputActive]}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              onFocus={
                (() => setIsFocusedEmail(true), () => setIsShowKeyboard(true))
              }
              onBlur={
                (() => setIsFocusedEmail(false), () => setIsShowKeyboard(false))
              }
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[isFocusedPassword && styles.inputActive]}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
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
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>Зареєстуватися</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={navigateToLogin}
            >
              <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
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
    // marginTop: "80%",
    // marginTop: -540,
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    fontFamily: "Roboto",
  },

  title: {
    marginTop: -32,
    // marginBottom: 16,
    textAlign: "center",

    fontSize: 30,

    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
  },

  input: {
    marginTop: 16,
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

  registerButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    marginTop: 43,
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },

  loginLink: {
    marginTop: 16,
    alignItems: "center",
  },
  loginLinkText: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "bold",
    // marginBottom: "100%",
  },

  avatar: {
    // position: "absolute",
    left: 135,
    top: -60,

    backgroundColor: "#F6F6F6",
    height: 140,
    width: 140,

    borderRadius: 16,
  },

  avatarIcon: {
    position: "relative",
    width: "100%",
    height: "100%",
    left: 125,
    top: 85,
    fill: "none",
    stroke: "#FF6C00",
  },
  avatarIconEdit: {
    position: "relative",
    left: 125,
    top: 85,
    fill: "#fff",
    stroke: "#BDBDBD",
  },
});

export default RegistrationScreen;
