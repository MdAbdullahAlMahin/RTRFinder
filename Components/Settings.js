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

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        {/* Instructions */}
        <Text>How to use the app:</Text>
      </View>
      <Button
        title="Change Step Size"
        onPress={() => navigation.navigate("Choose Step Size")}
      />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};

export default Settings;
