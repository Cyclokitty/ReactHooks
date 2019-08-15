import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
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
