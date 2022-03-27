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

const Instructions = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        {/* Instructions */}
        <Text>How to use the app:</Text>
      </View>
      <Button
        title="Choose Step Size"
        onPress={() => navigation.navigate("Choose Step Size")}
      />
    </SafeAreaView>
  );
};

export default Instructions;
