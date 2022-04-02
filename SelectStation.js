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
          <Text style={styles.normaltext}>Which station are you at?</Text>
          <Text style={styles.normaltext}>Enter Station here</Text>
          {error ? <Text>Station does not exist!</Text> : null}
          <TextInput
            placeholder="Enter station here"
            style={styles.input}
            onChangeText={(station) => {
              setStation(station.trim().replace(/\s/g, "").toLowerCase());
            }}
          />
        <View style={styles.parent}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
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
              }
            }}
          >
            <Text style={styles.text}>Submit</Text>
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
});
export default SelectStation;
