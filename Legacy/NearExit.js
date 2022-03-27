import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from "react-native";

export default function NearExit({ navigation }) {
  const [loc, Setloc] = useState(navigation.getParam("Loc"));
  const [exit, Setexit] = useState(navigation.getParam("Exit"));

  const nextpage = () => {
    navigation.navigate("ChooseMode", { loc, exit });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={padding(0, 0, 10, 0)}>
        {navigation.getParam("Loc")} Exit {navigation.getParam("Exit")}:
      </Text>
      <Text style={padding(0, 0, 10, 0)}>
        @mahin: enter data about what is around this exit
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          nextpage();
        }}
        activeOpacity={0.5}
      >
        <Text>Next</Text>
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
