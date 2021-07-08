import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
// import {TabNavigator} from './components/TabNavigator'
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/DrawerNavigator' 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <SafeAreaProvider>
      <AppContainer/>
      </SafeAreaProvider>
    );
  }
}

export default App;
var SwitchNavigator = createSwitchNavigator({
  // AnimationScreen:{screen:AnimationScreen},
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},
})
var AppContainer = createAppContainer(SwitchNavigator)
