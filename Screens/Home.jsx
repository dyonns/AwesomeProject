import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BgImage from "../images/Photo_min.jpg";
import { SvgXml } from "react-native-svg";
import { iconAdd, iconEdit, iconLogOut } from "../icons";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={BgImage} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          {/* <Image source={BgImage} style={styles.userPhoto} /> */}
          <SvgXml xml={iconAdd} style={styles.avatarIcon} />
          {/* <SvgXml xml={iconEdit} style={styles.avatarIconEdit} /> */}
        </View>
        <SvgXml
          xml={iconLogOut}
          style={styles.iconLogOut}
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <Text style={styles.title}>name</Text>
      </View>
    </ImageBackground>
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
    marginTop: 180,
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",

    fontFamily: "Roboto",
  },

  title: {
    marginTop: -32,
    textAlign: "center",

    fontSize: 30,

    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
  },

  avatar: {
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

  userPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 16,
  },
  iconLogOut: {
    position: "absolute",
    width: 34,
    height: 34,
    left: "87%",
    top: "3%",
    fill: "none",
    stroke: "#BDBDBD",
  },
});

export default RegistrationScreen;
