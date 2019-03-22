import React, { Fragment } from 'react';
import './Style/VehicleActions.css';

const VehicleActions = ({amounts, buyButton, sellButton}) => (
    <>
      <label>Amount of cars {amounts} availables</label><br/>
      <div className="Button">
        <button onClick = {buyButton}> Buy Car </button> 
        <button onClick = {sellButton}> Sell Car </button>
      </div>
    </>
);

export default VehicleActions;