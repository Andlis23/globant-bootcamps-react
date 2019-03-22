import React          from 'react';
import VehicleActions from './VehicleActions';
import Pagina         from './Pagina';
import './VehicleInfo';
import app from './Cars.json.js'

class Vehicle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amounts: this.props.amount,
            cars: ''   
        }

        this.buyButton  = this.buyButton.bind(this);
        this.sellButton = this.sellButton.bind(this);
    };

    componentDidMount(){
        const { carId } = this.props.match.params;
        const cars = cars[carId];
    }


    buyButton() {
        this.setState(state => ({
            amounts: state.amounts + 1,
        }));
    }

    sellButton() {
        this.state.amounts >= 1 && this.setState(state => ({
            amounts: state.amounts - 1,
        }));
    }

    render() {
        const cars = this.state;
        const { brand, model, year, motor } = cars;
        return (
          <div>
            <Pagina
             brand={brand}
             model={model}
             year ={year}
             motor={motor}
            />
            <VehicleActions
             amounts    = {this.state.amounts}
             buyButton  = {this.buyButton}
             sellButton = {this.sellButton} />
           </div>
        );
    }
}
export default Vehicle;

/*
const { carID } = props.match.params // aqui vienen los parametros
const car = FindCarById(CarId)


function FindBookById(carId) {

  carId = Number(carId)

  return api.car.find(car => car.id === carId) || null
}

*/