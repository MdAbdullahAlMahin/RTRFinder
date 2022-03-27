import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function Location({ navigation }) {
  const [location, SetLocation] = useState("");
  const onPressHandle = (value) => {
    SetLocation((value) => {
      return [value];
    });
  };
  const nextpage = () => {
    navigation.navigate("Exit", { location });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>Enter your location</Text>
      <TextInput
        style={styles.input}
        name="location"
        placeholder="e.g. Kennedy Town"
        onChangeText={(value) => SetLocation(value)}
      />
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
