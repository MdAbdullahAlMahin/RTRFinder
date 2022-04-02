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
  TouchableOpacity,
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
  var error = false;
  const validate = () => {
    if (parseFloat(stepSize) > 0.0 && parseFloat(stepSize) < 1.0) {
      error = false;
    } else {
      error = true;
    }
  };

  const SaveAndNavigate = () => {
    validate();
    console.log(error);
    if (!error) {
      writeItemToStorage(stepSize);
      console.log("writing done");
      navigation.navigate("Home");
    } else {
      alert(
        "Incorrect step size! Step size must be between 0 metres to 1 metres"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.normaltext}>
        Enter your step size here, step size must be between 0 metres to 1
        metres
      </Text>
      {stepSize !== 0.0 ? (
        <Text style={styles.normaltext}>Step size: {stepSize}</Text>
      ) : null}
      {error ? (
        <Text style={styles.normaltext}> Incorrect step size!</Text>
      ) : null}
      <View style={styles.container2}>
        <TextInput
          placeholder="Type in your step size here!"
          onChangeText={(stepSize) => {
            setStepSize(stepSize);
          }}
          keyboardType="numeric"
          maxLength={5}
          style={styles.input}
        />
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Instructions");
          }}
        >
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={SaveAndNavigate}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 70,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#1167b1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: "white",
    width: "46%",
    height: 50,
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChooseStepSize;
