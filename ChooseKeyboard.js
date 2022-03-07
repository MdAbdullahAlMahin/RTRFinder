//Hello

import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

export default function ChooseKeyboard({ navigation }) {
  const nextpage = () => {
    navigation.navigate("StepSize", { keyboard });
  };
  const [keyboard, SetKeyboard] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 20, 0)}>Keyboard type</Text>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => {
          SetKeyboard("Braille");
          nextpage();
        }}
        onPressOut={() => {
          SetKeyboard("Braille");
          nextpage();
        }}
        activeOpacity={0.5}
      >
        <Text>Braille</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPressIn={() => {
          SetKeyboard("Text");
          nextpage();
        }}
        onPressOut={() => {
          SetKeyboard("Text");
          nextpage();
        }}
        activeOpacity={0.5}
      >
        <Text>Text</Text>
      </TouchableOpacity>
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
    width: 200,
  },
  button: {
    width: 130,
    height: 50,
    paddingTop: 16,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
  },
});
