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
  KeyboardAvoidingView
} from "react-native";
import * as Speech from 'expo-speech'

import { stationExists } from "../Helpers/UseSpecs";
const SelectStation = ({ route, navigation }) => {
  const { stepSize } = route.params;
  const [station, setStation] = useState("");
  const [error, setError] = useState(false);
  const validate = () => {
    console.log(station);
    if (station !== "") {
      console.log(stationExists(station));
      setError(!stationExists(station));
      console.log(error);
    } else {
      setError(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent2}>
      <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2}
          onPress={() => {
            Speech.speak('Type your station. The keyboard is always there. Speak screen to check . The submit button is on the top right of the keyboard. The back button is on the top left of the keyboard.')
          }}
        >
          <Text style={styles.text}></Text>
        </TouchableOpacity>
        </View>
        <View style={styles.parent3}>
          {/* <Text style={styles.normaltext}>Which station are you at?</Text>
          <Text style={styles.normaltext}>Enter Station here</Text> */}
          {error ? <Text>Station does not exist!</Text> : null}
          <TextInput
            placeholder="Enter station here"
            ref={(ref) => {

              if( ref !== undefined && ref && !ref.isFocused() ){
  
                  ref.focus();
              }
          }}
            style={styles.input}
            onChangeText={(station) => {
              setStation(station.trim().replace(/\s/g, "").toLowerCase());
            }}
          />
          </View>
        <KeyboardAvoidingView style={styles.parent} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => {navigation.navigate("Home"); Speech.speak('Back')}}
          >
            <Text style={styles.text}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => {
              validate();
              if (!error) {
                navigation.navigate("Select Exit", { stepSize, station });
                Speech.speak('Submit, which exit do you wish to leave at?')
              }
            }}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    bottom: 30,
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: "90%",
    alignItems: "center",
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
});
export default SelectStation;
