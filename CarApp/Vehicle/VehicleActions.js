import React, { Fragment } from 'react';
import {Text, View, Button} from 'react-native';

const VehicleActions = ({amounts, buyButton, sellButton}) => (
  <>
  <Text>Cars availables: {amounts} </Text>
  <Button 
   onPress = {buyButton}
   title="Buy Car" 
   style={styles.Button} />
  <Button 
   onClick = {sellButton}
   title="Sell Car" 
   style={styles.Button} />
 </>
);

export default VehicleActions;

const styles = StyleSheet.create({
    Button: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e2dede',
    }
})