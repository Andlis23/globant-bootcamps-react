import React from 'react';
import CarActions from './CarActions';
import './CarInfo';

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            amounts: this.props.amount
        };

        this.buyButton = this.buyButton.bind(this);
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
            <CarActions
             amounts    = {this.state.amounts}
             buyButton  = {this.buyButton}
             sellButton = {this.sellButton} />
        );
    }
}
export default Button;
