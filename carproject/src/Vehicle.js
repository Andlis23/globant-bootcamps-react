import React          from 'react';
import VehicleActions from './VehicleActions';
import VehicleInfo    from './VehicleInfo';
import './Style/Vehicle.css'

class Vehicle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amounts: this.props.amounts,
            count: 0
        }

        this.buyButton  = this.buyButton.bind(this);
        this.sellButton = this.sellButton.bind(this);
    };

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
        return (
         <div className="vehicle">
            <VehicleInfo 
              key={this.props.id}
              brand={this.props.brand}
              model= {this.props.model}
              img={this.props.img}
              year={this.props.year}
              motor= {this.props.motor}
            />
            <VehicleActions
             amounts    = {this.state.amounts}
             buyButton  = {this.buyButton}
             sellButton = {this.sellButton} 
             /> 
         </div> 
        );
    }
}
export default Vehicle;