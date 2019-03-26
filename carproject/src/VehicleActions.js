import React, { Fragment } from 'react';

const VehicleActions = ({amounts, buyButton, sellButton}) => (
  <>
  <p>Amount of cars <br/> availables: {amounts} </p>
  <button className="button" onClick = {buyButton}> Buy Car </button> 
  <button className="button" onClick = {sellButton}> Sell Car </button>
 </>
);

export default VehicleActions;