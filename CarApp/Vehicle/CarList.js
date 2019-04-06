import React, {Fragment}   from 'react';

import {TextInput, View, Button} from 'react-native';

import api from './Cars.json.js';
import Vehicle from './Vehicle';

const carList = () => {
  const cars = api.cars.map( car => (
    <Vehicle
      key    ={car.id}
      id     ={car.id}
      img    ={car.img}
      brand  ={car.brand}
      model  ={car.model}
      year   ={car.year}
      motor  ={car.motor}
      amounts={car.amounts} />
    ));
    return (
      <>
      <View style={styles.Paragraph}>
        <Text>This is our car list for you</Text>
      </View>
      <View style={styles.FlexContainer}>
        {cars}
      </View>
      </>
  )
}
export default carList;

const styles = StyleSheet.create({
    Paragraph: {
        marginLeft: 70,
        marginTop: 50,
        fontSize: 20,
    },
  
    FlexContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
  });