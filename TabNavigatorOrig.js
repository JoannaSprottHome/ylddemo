import React, {Fragment} from 'react';
import { List as ListScreen, About as AboutScreen } from './screens'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';

const TabNavigator = createBottomTabNavigator(
  {
    List: {
      screen: ListScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  { initialRouteName: 'List' }
);

const Navigator = createAppContainer(TabNavigator);

export default (props) => {
  return (
    <View style={{ flex: 1 }}>
    <Text>something</Text>
      <Navigator {...props} />
    </View>
  )
}
