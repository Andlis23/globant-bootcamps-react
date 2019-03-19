import React from 'react';
import './Button.css';

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    };

    increment() {
        this.setState(state => ({
            counter: state.counter + 1,
        }));
    }

    decrement() {
        this.state.counter >= 1 && this.setState(state => ({
            counter: state.counter - 1,
        }));
    }

    render() {
        return (
            <div className="Button">
              <label>You have {this.state.counter} cars</label><br/>
              <button onClick = {this.increment.bind(this)}> + </button> 
              <button onClick = {this.decrement.bind(this)}> - </button>
            </div>
        );
    }
}
export default Button;
