import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Navigator from './screens/routes/HomeStack';

export default class example extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
        <><View>
                <Text style={styles.item}>
                    SplashScreen 启动屏
                </Text>
            </View><Navigator /></></>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop: 30
    },
    item: {
        fontSize: 20,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})