import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import * as Speech from 'expo-speech'

const HomePage = ({ navigation }) => {
  const [stepSize, setStepSize] = useState(0.576);
  // Load step size;
  const { getItem, setItem } = useAsyncStorage("step_size");
  const readItemFromStorage = async () => {
    const item = await getItem();
    setStepSize(item);
  };
  useEffect(() => {
    readItemFromStorage();
    console.log("In Homepage", stepSize);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
      <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak('Welcome. Press the button on the bottom left of the screen to start your journey, or configure your settings by clicking the button on the bottom right.')
          }}
        >
          <Text style={styles.text}></Text>
        </TouchableOpacity>
        </View>
        <View style={styles.parent3}>
        <Text style={styles.normaltext}>Hello there!</Text>
        <Text style={styles.normaltext}>
          Press the button on the bottom left of the screen to start your journey,
          or configure your settings by clicking the button on the bottom right.
        </Text>
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(stepSize);
            navigation.navigate("Select Station", { stepSize: stepSize });
            Speech.speak('start journey, type in your station')
          }}
        >
          <Text style={styles.text}>Start Journey</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {navigation.navigate("Settings"); Speech.speak('Settings')}}
        >
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 15,
  },
  parent2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    top: 35,
    right: 15
  },
  parent3: {
    position: "absolute",
    top: 90,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "20%",
    height: 50,
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
    width: "48%",
    padding: 18,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "white",
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    // fontFamily: "Helvetica",
    // arial,
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default HomePage;
