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
    <SafeAreaView>
      <View>
        <Text>Hello there!</Text>
        <Text>
          Press the button at the center of the screen to start your journey,
          you could also configure your settings by clicking on the settings
          button at the bottom.
        </Text>
      </View>
      <Button
        title="Start Journey"
        onPress={() => {
          console.log(stepSize);
          navigation.navigate("Select Station", { stepSize: stepSize });
        }}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
};
export default HomePage;
