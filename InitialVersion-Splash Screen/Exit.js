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

export default function Exit({ navigation }) {
  const [Exit, SetExit] = useState("");
  const onPressHandle = (value) => {
    SetExit((value) => {
      return [value];
    });
  };
  const [Loc, SetLoc] = useState(navigation.getParam("location"));
  const nextpage = () => {
    navigation.navigate("NearExit", { Exit, Loc });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>
        {navigation.getParam("location")} Exits:
      </Text>
      <Text style={padding(0, 0, 10, 0)}>
        @mahin: enter exit choices here from storage
      </Text>
      <Text style={padding(0, 0, 10, 0)}>Choose your exit</Text>
      <TextInput
        style={styles.input}
        name="Exit"
        placeholder="e.g. A"
        maxLength={3}
        onChangeText={(value) => SetExit(value)}
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
