import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { iconLogOut, iconPlas, iconUser, iconGrid } from "../icons";
import { SvgXml } from "react-native-svg";
import LogoImage from "../images/Photo_min.jpg";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <SvgXml
          xml={iconLogOut}
          style={styles.iconLogOut}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
      <View style={styles.userInfo}>
        <Image source={LogoImage} style={styles.userPhoto} />
        <View>
          <Text style={styles.userInfoName}>Name Name</Text>
          <Text style={styles.userInfoEmail}>Email</Text>
        </View>
      </View>
      <View>
        <Text>картинки</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 40,
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
  iconLogOut: {
    position: "absolute",
    width: 34,
    height: 34,
    left: "95%",
    top: "35%",
    fill: "none",
    stroke: "#BDBDBD",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingLeft: 16,
    paddingBottom: 32,
    paddingRight: 16,
  },
  userPhoto: {
    marginRight: 8,
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
  userInfoName: {
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 15,
  },
  userInfoEmail: {
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 13,
  },
});
export default ProfileScreen;
