import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from '../DrawerNavigator/Header'

class ContactScreen extends Component {
    render() {
      return (
        <Container style={{backgroundColor:'#e2dede'}}>
            <Header navigation={this.props.navigation} />
            <Content>
                <Text style={styles.Title}>Contact us </Text>
                <Text style={styles.Paragraph}>Numbers: (221) 3059950 / (221) 6295575</Text>
                <Text style={styles.Paragraph}>Direction: Buenos Aires, Argentina.</Text>
                <Image 
                  style={{width:300, height: 300, marginHorizontal: 30, marginTop:20}}
                  source={require('../Image/ubication.jpg')}/>
            </Content>
        </Container>
      );
    }
  }

export default ContactScreen;

const styles = StyleSheet.create({
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    marginLeft: 30,
  },

  Paragraph: {
    fontSize: 15,
    marginHorizontal: 40,
    lineHeight: 20,
    marginTop: 15,
  },
});