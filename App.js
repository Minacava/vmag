import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Home from './screens/Home';


export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" hidden={false} translucent={true} />
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});