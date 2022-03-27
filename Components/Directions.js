import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";
const Directions = ({ route, navigation }) => {
  const { dir } = route.params;
  const directions = [
    "Starting your journey, press the buttons on the bottom to go the next instruction or go back to the previous instruction \nPress the buttons at the top to end your journey prematurely and go back to the Homepage, or call a helpline at #number \nYou may also back to station selection by pressing the bottom left button on this page",
    ...dir,
    "Congrats, you made it!\nClick the bottom right button to go back to the Homepage",
  ];
  const [curr, set_curr] = useState(0);
  const update_curr = (dir) => {
    var num = curr + dir;
    if (num < 0) {
      num = 0;
    } else if (num >= directions.length) {
      navigation.navigate("Home");
    }
    set_curr(num);
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="Call for Help" />
        {curr != directions.length - 1 ? (
          <Button
            title="End Journey Early"
            onPress={() => navigation.navigate("Home")}
          />
        ) : null}
      </View>
      <View>
        <Text>{directions[curr]}</Text>
      </View>
      {curr !== 0 ? (
        <Button title="Previous Instruction" onPress={() => update_curr(-1)} />
      ) : null}

      <Button
        title={
          curr === directions.length - 1 ? "End Journey" : "Next Instruction"
        }
        onPress={() => update_curr(1)}
      />
    </SafeAreaView>
  );
};

export default Directions;
