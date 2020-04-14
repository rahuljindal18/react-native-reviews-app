import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title="go back to home screen" onPress={pressHandler} />
    </View>
  );
}
