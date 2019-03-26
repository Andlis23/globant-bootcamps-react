import React, { fragment } from 'react';

const VehicleInfo = ({ img, alt, brand, model, year, motor}) => (
    <>
      <p>{brand} {model}</p>
      <img src={img} alt={alt} />
      <p>Motor: {motor}</p>
      <p>Year: {year}</p>
    </>
); 
export default VehicleInfo; 