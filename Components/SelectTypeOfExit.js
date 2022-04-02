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
import { useSpecs } from "../Helpers/UseSpecs";
import useMap from "../Helpers/UseMap";
const SelectTypeOfExit = ({ route, navigation }) => {
  const { stepSize, station, exit } = route.params;
  console.log("In type", station);
  var modes_of_exit = useSpecs(station);
  console.log("In Type", modes_of_exit);
  modes_of_exit = modes_of_exit.type_of_exits;
  modes_of_exit = modes_of_exit[exit];
  // // location, exit, nearby_places, type_of_exit
  const navigateEs = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Escalator");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
  };
  const navigateEl = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Elevator");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
  };
  const navigateSt = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Stairs");
    navigation.navigate("Directions", { dir, stepSize, station, exit });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.normaltext}>How do you wish to exit?</Text>
        {modes_of_exit.some((e) => e === "Escalator") ? (
          <Button title="Escalator" onPress={navigateEs} />
        ) : null}
        {modes_of_exit.some((e) => e === "Elevator") ? (
          <Button title="Elevator" onPress={navigateEl} />
        ) : null}
        {modes_of_exit.some((e) => e === "Stairs") ? (
          <Button title="Stairs" onPress={navigateSt} />
        ) : null}
      </View>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() =>
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exit,
            })
          }
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
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
    height: 50,
    width: "46%",
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
export default SelectTypeOfExit;
