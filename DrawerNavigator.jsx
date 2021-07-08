import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import  {AppTabNavigator} from './TabNavigator'
import SideBar  from './SideBar';
 import SettingScreen from "../screens/SettingScreen";
 import MyBarters from '../screens/MyBarters'
 import Notifications from '../screens/Notifications'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyBarters: {
    screen:MyBarters
  },
  Notifications: {
    screen :Notifications
  },
  Setting :{
    screen:SettingScreen
  },
  },
  {
    contentComponent:SideBar
  },
  {
    initialRouteName : 'Home'
  })