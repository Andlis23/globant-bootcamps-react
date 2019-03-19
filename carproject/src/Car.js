import React from 'react';
import './Car.css';
import Button from './Button';

const Car = ({id, img, alt, brand, model, year, motor}) => (
    <div className="car">
        <p>{brand} {model}</p>
        <ul>
            <li><img src={img} alt={alt} /></li>
            <li>Year: {year}</li>
            <li>Motor: {motor}</li>
            <li><Button /></li>
        </ul>
    </div>
); 
export default Car; 