import React, {Fragment}   from 'react';
import { Link } from 'react-router-dom';
import api from './Cars.json.js';
import Vehicle from './Vehicle';
import './Style/CarList.css';

const carList = ({match}) => {
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
      <div className="paragraph">
        <p>This is our car list for you</p>
      </div>
      <div className= "flex-container">
        {cars}
      </div>
      </>
  )
}
export default carList;