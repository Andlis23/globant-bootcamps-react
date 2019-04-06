import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrawerNavigator, DrawerItems }  from 'react-navigation'

import { Body, Container, Content } from 'native-base';

const Drawer = (props) => (
    <Container>
        <Body style={styles.body}>
          <Image 
            style={styles.drawerImage}
            source={require('../Image/Logo.jpg')}/>
        </Body>
      <Content style={styles.drawer}>
        <DrawerItems {...props} activeBackgroundColor='#e4e4e4' activeTintColor='black'  />
      </Content>
    </Container>
)
export default Drawer;

const styles = StyleSheet.create({
  drawerImage: {
    height: 160,
    width: 280,
    marginTop: 60,
  },

  body: {
    backgroundColor: '#e4e4e4',
  },
});