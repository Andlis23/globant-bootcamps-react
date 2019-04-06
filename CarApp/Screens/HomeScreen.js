import React, { Component } from 'react';
import { Icon, Button, Container, Content, Left } from 'native-base';
import { StyleSheet, Text, View, Image, Input } from 'react-native';

import Header from '../DrawerNavigator/Header'

class HomeScreen extends Component {
    render() {
      return (
        <Content style={{backgroundColor: '#e2dede'}}>
          <Header navigation={this.props.navigation} />
          <View>
            <Text style={styles.Title}>Welcome to our cars sale</Text>
            <Image 
              style={{width:300, height: 200, marginHorizontal: 30, marginTop:20}}
              source={require('../Image/Principal2.jpg')}/>
            <Text style={styles.Text}>Go to our menu to see more about us</Text>
          </View>
        </Content>
      );
    }
  }
export default HomeScreen;

const styles = StyleSheet.create({
    Title: { 
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 70,
      marginBottom: 5,
      textAlign:'center'
    },
    Text: {
      textAlign:'center',
      fontSize: 20,
      marginTop: 20
    }
})