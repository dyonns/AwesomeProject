import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgUri } from "react-native-svg";
// import icons from "../assets/add.svg";,

const RegistrationScreen = ({ navigation }) => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = () => {};

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <SvgUri
          width="100%"
          height="100%"
          source={{
            uri: "../assets/add.svg",
          }}
        />
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={[styles.input, isFocusedName && styles.inputActive]}
        placeholder="Введіть ім'я користувача"
        onFocus={() => setIsFocusedName(true)}
        onBlur={() => setIsFocusedName(false)}
      />

      <TextInput
        style={[styles.input, isFocusedEmail && styles.inputActive]}
        placeholder="Адреса електронної пошти"
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => setIsFocusedEmail(false)}
      />

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={[isFocusedPassword && styles.inputActive]}
          placeholder="Пароль"
          secureTextEntry={!isPasswordVisible}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
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
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Зареєстуватися</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink} onPress={navigateToLogin}>
        <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "white",
    marginTop: "60%",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    fontFamily: "Roboto",
  },
  title: {
    marginTop: 92,
    marginBottom: 16,
    textAlign: "center",

    fontSize: 30,

    fontWeight: 500,
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
    fontWeight: 400,
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
    fontWeight: 400,
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
  },

  avatar: {
    position: "absolute",
    left: 145,
    top: -60,

    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,

    borderRadius: 16,
  },
  svg: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    stroke: "#ff6c00",
    fill: "#fff",
  },
});

export default RegistrationScreen;
