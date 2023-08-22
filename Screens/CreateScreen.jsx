import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { iconArrow, iconCamera, iconMap, iconTrash } from "../icons";
import { SvgXml } from "react-native-svg";
import LogoImage from "../images/Photo_min.jpg";
import { useState } from "react";

const CreateScreen = () => {
  const navigation = useNavigation();
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Створити публікацію</Text>
            <SvgXml
              xml={iconArrow}
              style={styles.iconArrow}
              onPress={() => navigation.navigate("ProfileScreen")}
            />
          </View>
          <View style={styles.addPhoto}>
            {/* <Image source={LogoImage} style={styles.userPhoto} /> */}
            <View style={styles.addPhotoButton}>
              <SvgXml xml={iconCamera} style={styles.iconCamera} />
            </View>
          </View>
          <View>
            <Text style={styles.addPhotoTxt}>Завантажте фото</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Назва..."
            // value={name}
            onFocus={() => setIsFocusedInput(true)}
            onBlur={() => setIsFocusedInput(false)}
            // onChangeText={setName}
          />
          <View style={{ position: "relative" }}>
            <TextInput
              style={[styles.input, { paddingLeft: 35 }]}
              placeholder="Місцевість..."
              // value={name}
              onFocus={() => setIsFocusedInput(true)}
              onBlur={() => setIsFocusedInput(false)}
              // onChangeText={setName}
            />
            <SvgXml xml={iconMap} style={styles.iconMap} />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tresh}>
          <View style={styles.treshHolder}>
            <SvgXml xml={iconTrash} style={styles.iconTrash} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // flexDirection: "column",
    // alignContent: "center",
    justifyContent: "space-between",
    position: "relative",

    paddingTop: 40,
    paddingLeft: 8,
    paddingRight: 8,
    fontFamily: "Roboto",

    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto",
  },
  header: {
    padding: 11,
    alignItems: "center",

    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  iconArrow: {
    position: "absolute",
    width: 34,
    height: 34,
    left: 0,
    top: "35%",
    fill: "transparent",
    stroke: "#212121",
  },

  addPhoto: {
    marginTop: 32,
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  userPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  addPhotoButton: {
    borderRadius: "50%",
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    top: "35%",
  },
  iconCamera: {
    top: "22%",
    left: "22%",
    fill: "#BDBDBD",
  },
  addPhotoTxt: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  input: {
    marginTop: 32,
    paddingTop: 16,
    paddingBottom: 16,

    borderBottomColor: "#E8E8E8",
    borderBottomWidth: "1px",

    fontSize: 16,

    fontWeight: "400",
    lineHeight: 18,
  },
  iconMap: {
    position: "absolute",
    top: 40,
    stroke: "#BDBDBD",
    fill: "none",
  },

  loginButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    marginTop: 32,
    paddingVertical: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
  tresh: {
    alignItems: "center",
  },
  treshHolder: {
    alignItems: "center",
    marginBottom: 34,
    width: 90,
    height: 45,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  iconTrash: {
    // position: "absolute",
    top: 5,
    left: 30,
    stroke: "#BDBDBD",
    fill: "none",
  },
});

export default CreateScreen;
