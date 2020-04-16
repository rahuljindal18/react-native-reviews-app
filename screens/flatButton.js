import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default function FlatButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
