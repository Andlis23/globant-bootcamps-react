import React, { Component } from 'react';
import { Button, Container, Content, Left, Icon } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from '../DrawerNavigator/Header'

class AboutScreen extends Component {
    render() {
      return (
        <Container style={{backgroundColor:'#e2dede'}}>
            <Header navigation={this.props.navigation} />
            <Content>            
              <Text style={styles.Title}>About our company</Text>
              <Text style={styles.Paragraph}>
               We are a company with a great career in sales of cars. Our mission is to be within the highest 
               rates of demand in the car market.
              </Text>
              <Image 
                  style={{width:300, height: 150, marginHorizontal: 30, marginTop:30}}
                  source={require('../Image/about.jpg')}/>
            </Content>
        </Container>
      );
    }
  }
export default AboutScreen;

const styles = StyleSheet.create({
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    marginLeft: 40,
  },

  Paragraph: {
    fontSize: 15,
    marginHorizontal: 50,
    lineHeight: 30,
    marginTop: 15,
  },
});