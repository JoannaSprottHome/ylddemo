import React, {Fragment} from 'react';
import {
  Button
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
}
