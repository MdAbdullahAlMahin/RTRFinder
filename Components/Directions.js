import React, { useState } from "react";
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

const Directions = ({ route, navigation }) => {
  const { dir, stepSize, station, exit } = route.params;
  const directions = [
    "Start Journey Now",
    ...dir,
    "Congrats, you made it!\nClick the bottom right button to go back to the Homepage",
  ];
  const [curr, set_curr] = useState(0);
  const update_curr = (dir) => {
    var num = curr + dir;
    if (num < 0) {
      navigation.navigate("Select Type Of Exit", { stepSize, station, exit });
    } else if (num >= directions.length) {
      navigation.navigate("Home");
    }
    set_curr(num);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Call for Help</Text>
        </TouchableOpacity>
        {curr != directions.length - 1 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.text}>End Journey Early</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <Text style={styles.normaltext}>{directions[curr]}</Text>
      </View>
      <View style={styles.parent}>
        {curr !== 0 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => update_curr(-1)}
          >
            <Text style={styles.text}>Previous</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => update_curr(-1)}
          >
            <Text style={styles.text}>Go Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          title={
            curr === directions.length - 1 ? "End Journey" : "Next Instruction"
          }
          onPress={() => update_curr(1)}
        >
          <Text style={styles.text}>Next</Text>
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
export default Directions;
