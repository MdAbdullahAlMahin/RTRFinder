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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
const ChooseStepSize = ({ navigation }) => {
  const [stepSize, setStepSize] = useState(0.0);
  const { getItem, setItem } = useAsyncStorage("step_size");
  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setStepSize(newValue);
  };
  const SaveAndNavigate = () => {
    writeItemToStorage(stepSize);
    console.log("writing done");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <Text>Enter your step size here</Text>
      <Text>
        Proceed to the Homepage by submitting your step size on the bottom left.
      </Text>
      <Text>Enter step size here</Text>
      {stepSize !== 0.0 ? <Text>Step size: {stepSize}</Text> : null}
      <TextInput
        placeholder="Type in your step size here!"
        onChangeText={(stepSize) => setStepSize(stepSize)}
        keyboardType="numeric"
        maxLength={5}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.navigate("Instructions");
        }}
      />
      <Button title="Submit" onPress={SaveAndNavigate} />
    </SafeAreaView>
  );
};
export default ChooseStepSize;
