import React from 'react';
import './Style/CarInfo.css';
import Button from './Button';

const CarInfo = ({id, img, alt, brand, model, year, motor, amounts}) => (
    <div className="car">
        <p>{brand} {model}</p>
        <ul>
            <li><img src={img} alt={alt} /></li>
            <li>Year: {year}</li>
            <li>Motor: {motor}</li>
            {/* <li>Units availables: {amounts}</li> */}
            <li><Button amount = {amounts}/></li>
        </ul>
    </div>
); 
export default CarInfo; 