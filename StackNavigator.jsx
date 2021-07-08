import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ExchangeItemsScreens from '../screens/HomeScreen';
import ReciverDetailsScreen from '../screens/ReciverDetails';
import MyBarters from '../screens/MyBarters'
export const AppStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: ExchangeItemsScreens,
    navigationOptions: {
      headerShown: false
    }
  },
  ReciverDetailsScreen: {
    screen: ReciverDetailsScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  MyBarters:{
    screen:MyBarters,
    navigationOptions:{
      headerShown: false
    }
  }
},
  {
    initialRouteName: 'HomeScreen'
  }
);