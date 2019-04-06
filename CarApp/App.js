import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrawerNavigator, DrawerItems }  from 'react-navigation';

import MainApp from './DrawerNavigator/MainApp';

class App extends Component {
  render() {
    return (
        <MainApp />
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
