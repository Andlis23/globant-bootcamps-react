import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer }  from 'react-navigation'
import { Icon } from 'native-base';
import HomeScreen    from '../Screens/HomeScreen';
import AboutScreen   from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
import Form          from '../Form/UserForm';

import Drawer from './Drawer';

const MainNavigator = createDrawerNavigator({
    "Home": {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
        <Icon name='home' style={{height: 24, width: 24}}/>
        )
      },
      screen: HomeScreen,
    },
    "About us": {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
        <Icon name='md-information-circle' style={{height: 26, width: 26}}/>
        )
      },
      screen: AboutScreen,
    },
    "Contact us": {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name='md-contact' style={{height: 26, width: 26}}/>
        )
      },
      screen: ContactScreen,
    },
    "Car List": {
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
        <Icon name='car' style={{height: 26, width: 26}}/>
        )
      },
      screen: Form,
    },
  },
{
    // initialRouteName:  'Home',
    contentComponent:   Drawer,
    // drawerOpenRoute:   'DrawerOpen',
    // drawerCloseRoute:  'DrawerClose',
    // drawerToggleRoute: 'DrawerToggle'
  },
);

const MainApp = createAppContainer(MainNavigator)
export default MainApp;