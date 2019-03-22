import React from 'react';
import './Style/VehicleInfo.css';
import { Link } from 'react-router-dom';
// import api from './Cars.json.js'

const VehicleInfo = ({id, img, alt, brand, model}) => (
    <div className="car">
        <ul>
            <li>
              <p>{brand} {model}</p>
              <img src={img} alt={alt} />
            </li>
        </ul>
    </div>
); 
export default VehicleInfo; 