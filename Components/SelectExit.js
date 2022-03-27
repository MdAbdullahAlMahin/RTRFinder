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
import { stationExists, useSpecs } from "../Helpers/UseSpecs";
const SelectExit = ({ route, navigation }) => {
  const { stepSize, station } = route.params;
  console.log(station);
  var exits = useSpecs(station);
  console.log(exits);
  exits = exits.exits;
  const [exit_number, set_exit_number] = useState(0);
  const update_exit = (dir) => {
    var num = (exit_number + dir) % exits.length;
    if (num === -1) {
      num = exits.length - 1;
    }
    set_exit_number(num);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Which exit do you wish to leave at?</Text>
        <Text>
          You may go back to the last page by clicking on the bottom left, or //
          proceed by submitting your step size on the bottom left.
        </Text>
        <View>
          <Button title="Previous Exit" onPress={() => update_exit(-1)} />
          <Text>Exit {exits[exit_number]}</Text>
          <Button title="Next Exit" onPress={() => update_exit(1)} />
        </View>
        <Button
          title="Go Back"
          onPress={() =>
            navigation.navigate("Select Station", { stepSize: stepSize })
          }
        />
        <Button
          title="Submit"
          onPress={() =>
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exits[exit_number],
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default SelectExit;
