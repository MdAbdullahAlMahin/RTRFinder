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
import useNearbyPlaces from "../Helpers/Places";
const NearbyPlaces = ({ route, navigation }) => {
  const { stepSize, station, exit } = route.params;
  const places = useNearbyPlaces(station, exit);

  return (
    <SafeAreaView>
      <View>
        <Text>Places near exit {exit}</Text>
        <View>
          <FlatList
            data={places.map((place) => {
              return { key: place };
            })}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
          <Text>Are you heading for the correct exit?</Text>
          <Text>
            You may go back to the last page by clicking on the bottom left, or
            proceed by clicking one of the buttons at the middle of the screen.
          </Text>
        </View>
        <Button
          title="Go Back"
          onPress={() =>
            navigation.navigate("Select Exit", { stepSize, station })
          }
        />
        <Button
          title="Proceed"
          onPress={() =>
            navigation.navigate("Select Type Of Exit", {
              stepSize,
              station,
              exit,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default NearbyPlaces;
