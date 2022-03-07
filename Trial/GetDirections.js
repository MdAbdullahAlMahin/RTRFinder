import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState } from "react";

export default function GetDirections({ navigation }) {
  const [ktownAelevator, setDirections] = useState([
    { key: "1", distance: "0.9", direction: "right" },
    { key: "2", distance: "6.9", direction: "left" },
    { key: "3", distance: "0.9", direction: "left" },
    { key: "4", distance: "3", direction: "tap your card" },
    { key: "5", distance: "6", direction: "left" },
    { key: "6", distance: "1.5", direction: "right" },
    { key: "7", distance: "2.1", direction: "get in the elevator" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>
        Directions to {navigation.getParam("destination")}
      </Text>
    </SafeAreaView>
  );
}
function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 300,
  },
  button: {
    width: 130,
    height: 50,
    paddingTop: 20,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
