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
import { HomeScreen } from "./HomeScreen";

export default function WelcomeScreen({ navigation }) {
  const [Stepsize, SetName] = useState("");
  const onPressHandle = (value) => {
    SetName((value) => {
      return [value];
    });
    console.log({ Stepsize });
  };
  const nextpage = () => {
    navigation.navigate("HomeScreen", { Stepsize });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={padding(0, 0, 20, 0)}>MTR EXIT FINDER</Text>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>Enter your step size</Text>
      <TextInput
        style={styles.input}
        name="stepsize"
        placeholder="x.xxx meters"
        maxLength={5}
        onChangeText={(value) => SetName(value)}
      />
      <Text style={padding(0, 0, 10, 0)}>My step size is {Stepsize}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressHandle();
          nextpage();
        }}
        activeOpacity={0.5}
      >
        <Text>Submit</Text>
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
    paddingTop: 20,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
