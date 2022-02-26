import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../welcomescreen';
import HomeScreen from '../HomeScreen';
import GetDirections from '../GetDirections';


const screens = {
  WelcomeScreen:{
    screen: WelcomeScreen,
    navigationOptions: {
      title: 'Welcome to MTR Exit Finder'
    }
  },
  HomeScreen:{
      screen: HomeScreen,
      navigationOptions:{
        title: 'Where are you going?'
      }
  },
  GetDirections: {
      screen: GetDirections,
      navigationOptions:{
        title: 'Follow these directions'
      }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);