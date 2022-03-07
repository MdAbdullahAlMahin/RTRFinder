import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, TextInput, FlatList} from 'react-native';

export default function ChooseMode({navigation}) {
    const [mode, SetMode] = useState('');
    const [location, Setlocation] = useState(navigation.getParam('loc'));
    const [exit, Setexit] = useState(navigation.getParam('exit'));

    const onPressHandle = (value) => {
        SetMode((value) => {
        return [
          (value)
        ]
      });
    }
    const nextpage = () => {
      navigation.navigate('GetDirections',{mode, location, exit})
    }
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={padding(0,0,10,0)}>{navigation.getParam('loc')} Exit {navigation.getParam('exit')}: @Mahin put the mode choices here</Text>
        <TextInput style={styles.input}
            name = 'location'
            placeholder='e.g. Elevator / Stairs / Escalator'
            onChangeText = {(value)=>SetMode(value)}
        />
        <TouchableOpacity 
              style ={styles.button}
              onPress={() => { onPressHandle(); nextpage();}}
              activeOpacity={0.5}
          >
              <Text>Submit</Text>
          </TouchableOpacity>
      </SafeAreaView>
)
}
function padding(a, b, c, d) {
    return {
        paddingTop: a,
        paddingRight: b ? b : a,
        paddingBottom: c ? c : a,
        paddingLeft: d ? d : (b ? b : a)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
    },
    button:{
        width: 130,
        height: 50,
        paddingTop: 20,
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});