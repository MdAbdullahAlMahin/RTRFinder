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
    <SafeAreaView>
      <View>
        <View>
          <Text>Which station are you at?</Text>
          <Text>
            You may go back to the last page by clicking on the bottom left, or
            proceed by submitting your step size on the bottom left.
          </Text>
        </View>
        <View>
          <Text>Enter Station here</Text>
          {error ? <Text>Station does not exit!</Text> : null}
          <TextInput
            placeholder="Enter Station here"
            onChangeText={(station) => {
              setStation(station.trim().replace(/\s/g, "").toLowerCase());
            }}
          />
        </View>
        <View>
          <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
          <Button
            title="Submit"
            onPress={() => {
              validate();
              if (!error) {
                navigation.navigate("Select Exit", { stepSize, station });
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectStation;
