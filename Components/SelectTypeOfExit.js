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
    navigation.navigate("Directions", { dir });
  };
  const navigateEl = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Elevator");
    navigation.navigate("Directions", { dir });
  };
  const navigateSt = () => {
    var map = useMap(station, stepSize);
    var dir = map.findExit(exit, "Stairs");
    navigation.navigate("Directions", { dir });
  };
  return (
    <SafeAreaView>
      <View>
        <Text>How do you wish to exit?</Text>
        <Text>
          You may click one of the buttons of different types of exits to
          proceed, or press the button at the bottom of the screen to back to
          the previous screen
        </Text>
        <View>
          <View>
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
          <Button
            title="Go Back"
            onPress={() =>
              navigation.navigate("Nearby Places", {
                stepSize,
                station,
                exit: exits[exit_number],
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectTypeOfExit;
