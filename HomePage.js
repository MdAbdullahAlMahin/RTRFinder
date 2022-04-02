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
    <SafeAreaView style = {styles.container}>
      <View>
        <Text style={styles.normaltext}>Hello there!</Text>
        <Text style={styles.normaltext}>
          Press the button at the center of the screen to start your journey,
          you could also configure your settings by clicking on the settings
          button at the bottom.
        </Text>
        </View>
        <View style={styles.parent}>
      <TouchableOpacity style = {styles.button}
        onPress={() => {
          console.log(stepSize);
          navigation.navigate("Select Station", { stepSize: stepSize });
        }}
      ><Text style = {styles.text}>Start Journey</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.button}
        onPress={() => navigation.navigate("Settings")}
      ><Text style = {styles.text}>Settings</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#1167b1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: 'white',
    height: 50,
    width: '46%',
    padding: 18
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: 'white',
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
});

export default HomePage;
