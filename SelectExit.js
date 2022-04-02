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
    <SafeAreaView style={styles.container}>
        <Text style={styles.normaltext}>
          Which exit do you wish to leave at?
        </Text>
        <Text style={styles.normaltext}>Exit {exits[exit_number]}</Text>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() =>
            navigation.navigate("Select Station", { stepSize: stepSize })
          }
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => update_exit(+1)}
        >
          <Text style={styles.text}>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Nearby Places", {
              stepSize,
              station,
              exit: exits[exit_number],
            })
          }
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
    width: "33%",
    padding: 18,
  },
  text: {
    fontSize: 13.5,
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
export default SelectExit;
