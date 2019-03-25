import React, { fragment } from 'react';
// import './Style/VehicleInfo.css';
import { Link } from 'react-router-dom';
// import api from './Cars.json.js'

const VehicleInfo = ({ img, alt, brand, model, year, motor}) => (
    <>
      <p>{brand} {model}</p>
      <img src={img} alt={alt} />
      <p>Motor: {motor}</p>
      <p>Year: {year}</p>
    </>
); 
export default VehicleInfo; 