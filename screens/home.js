import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);
