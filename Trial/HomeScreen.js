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

export default function HomeScreen({ navigation }) {
  const [destination, SetDestination] = useState("");
  const onPressHandle = (value) => {
    SetDestination((value) => {
      return [value];
    });
    console.log({ destination });
  };
  const nextpage = () => {
    navigation.navigate("GetDirections", { destination });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>
        My step size is {navigation.getParam("Stepsize")}
      </Text>
      <Text style={padding(0, 0, 10, 0)}>Enter your destination</Text>
      <TextInput
        style={styles.input}
        name="destination"
        placeholder="e.g. Kennedy Town A Escalator"
        onChangeText={(value) => SetDestination(value)}
      />
      <Text style={padding(10, 0, 10, 0)}>I want to go to {destination}</Text>
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
