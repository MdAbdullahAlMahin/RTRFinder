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
  TouchableOpacity
} from "react-native";
import useNearbyPlaces from "../Helpers/Places";
const NearbyPlaces = ({ route, navigation }) => {
  const { stepSize, station, exit } = route.params;
  const places = useNearbyPlaces(station, exit);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.normaltext}>Places near exit {exit}</Text>
        <View>
          <FlatList
            data={places.map((place) => {
              return { key: place };
            })}
            renderItem={({ item }) => <Text style={styles.normaltext}>{item.key}</Text>}
          />
          <Text style={styles.normaltext}>Are you heading for the correct exit?</Text>
        </View>
        <View style={styles.parent}>
        <TouchableOpacity 
      activeOpacity={0.5}
      style = {styles.button}
          onPress={() =>
            navigation.navigate("Select Exit", { stepSize, station })
          }
        ><Text style={styles.text}>Back</Text></TouchableOpacity>
        <TouchableOpacity 
      activeOpacity={0.5}
      style = {styles.button}
          onPress={() =>
            navigation.navigate("Select Type Of Exit", {
              stepSize,
              station,
              exit,
            })
          }
        >
            <Text style={styles.text}>Proceed</Text>
        </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#1167b1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderColor: 'white',
    height: 50,
    width: '46%',
    padding: 18
  },  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: 'white',
  },
  normaltext: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Helvetica',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
});
export default NearbyPlaces;
