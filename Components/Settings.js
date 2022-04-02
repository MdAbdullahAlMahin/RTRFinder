import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView /*style={styles.container}*/>
      <View style={styles.parent2}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttontemp}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.text}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Choose Step Size");
          }}
        >
          <Text style={styles.text}>Change Step Size</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Instructions2");
          }}
        >
          <Text style={styles.text}>Instructions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  parent2: {
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 50,
    width: "46%",
    padding: 18,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  buttontemp: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    height: 50,
    width: "95%",
  },
  footer: {},
});
export default Settings;
