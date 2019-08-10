import React, {Fragment} from 'react';
import {
  Profile as ProfileScreen,
  About as AboutScreen,
  Home as HomeScreen,
  List as ListScreen,
  Detail as DetailScreen
} from './screens'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';



const SimpleStackNavigator = createStackNavigator(
  {
    List: {
      title: 'Color List',
      screen: ListScreen
    },
    Detail: {
      title: 'Color Details',
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'List'
  }
);

export default createAppContainer(SimpleStackNavigator);
