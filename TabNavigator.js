import React, {Fragment} from 'react';
import {
  Profile as ProfileScreen,
  About as AboutScreen,
  Home as HomeScreen,
  List as ListScreen,
  Detail as DetailScreen
} from './screens'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';
import SimpleStackNavigator from "./SimpleStackNavigator.js";



const TabNavigator = createBottomTabNavigator(
  {
    News: {
      screen: SimpleStackNavigator
    },
    About: {
      screen: AboutScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  { initialRouteName: 'News' , order: ['News', 'Profile', 'About']}
);

export default createAppContainer(TabNavigator);
