import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import ColourReducer from './src/screens/ColourReducer';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    ColourReducer: ColourReducer, 
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'AppyAppApp'
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <View style={{  flex: 1}}>
        <AppContainer />
      </View>
    )
  }
};
