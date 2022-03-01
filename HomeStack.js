import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StepSize from '../Stepsize';
import Location from '../Location';
import GetDirections from '../GetDirections';
import Exit from '../Exit';
import ChooseKeyboard from '../ChooseKeyboard'
import NearExit from '../NearExit';

const screens = {
  ChooseKeyboard:{
    screen: ChooseKeyboard,
    navigationOptions: {
      title: 'Which keyboard do you prefer?'
    }
  },
  StepSize:{
    screen: StepSize,
    navigationOptions: {
      title: 'What is your step size?'
    }
  },
  Location:{
      screen: Location,
      navigationOptions:{
        title: 'Where are you?'
      }
  },
  Exit:{
    screen: Exit,
    navigationOptions:{
      title: 'Which exit?'
    }
},
NearExit:{
  screen: NearExit,
  navigationOptions:{
    title: 'Which exit?'
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