import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {};

  const navigateToRegistration = () => {
    navigation.navigate("RegistrationScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <TextInput
        style={[styles.input, isFocusedEmail && styles.inputActive]}
        placeholder="Введіть ім'я користувача"
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: "80%",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    fontFamily: "Roboto",
  },
  title: {
    marginTop: 32,
    textAlign: "center",

    fontSize: 30,

    fontWeight: 500,
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
    fontWeight: 400,
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
    fontWeight: 400,
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
