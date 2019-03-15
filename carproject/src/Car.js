import React from 'react';
import './Car.css';

const Car = ({id, img, alt, brand, model, year, motor}) => (
    <div className="car">
        <ul>
            <li><img src={img} alt={alt} /></li>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Year: {year}</li>
            <li>Motor: {motor}</li>
        </ul>
    </div>
); 
export default Car; 