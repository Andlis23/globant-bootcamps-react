import React   from 'react';
import VehicleInfo from './VehicleInfo';
import './Style/CarList.css';
import { Link } from 'react-router-dom';
import api from './Cars.json.js';

const carList = ({match}) => {
  const cars = api.cars.map( car => (
    <Link key={car.id} to={{pathname: `/Vehicles/${car.id}`}}>
    <VehicleInfo
      key    ={car.id}
      id     ={car.id}
      img    ={car.img}
      brand  ={car.brand}
      model  ={car.model}
      year   ={car.year}
      motor  ={car.motor}
      amounts={car.amounts} />
    </Link>
    ));
    return (
      <div className= "flex-container">
        {cars}
      </div>
  )
}
export default carList;