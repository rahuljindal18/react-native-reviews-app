import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      {/* icon for the menu */}
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerImage}
          source={require("../assets/heart_logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flex: 1,
    width: 415,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -15,
  },
  headerText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 24,
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 26,
    height: 26,
  },
});
