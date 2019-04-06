import React, { fragment } from 'react';
import {Text, View, Button, Image} from 'react-native';

const VehicleInfo = ({ img, alt, brand, model, year, motor}) => (
    <>
      <Text>{brand} {model}</Text>
      <Image src={img} alt={alt} />
      <Text>Motor: {motor}</Text>
      <Text>Year: {year}</Text>
    </>
); 

export default VehicleInfo;
