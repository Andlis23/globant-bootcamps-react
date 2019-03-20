import React, { Fragment } from 'react';
import './Style/CarActions.css';

const CarActions = ({amounts, buyButton, sellButton}) => (
    <>
      <label>Amount of cars {amounts} availables</label><br/>
      <div className="Button">
        <button onClick = {buyButton}> Buy Car </button> 
        <button onClick = {sellButton}> Sell Car </button>
      </div>
    </>
);

export default CarActions;