import React from 'react';
import './Style/Form.css';
import { Redirect, withRouter } from 'react-router-dom';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            money:    '',
            choose:   'Yes',
            userNameError: '',
            moneyError: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name  = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value})
    };

    validate = () => {
        let userNameError= " ";
        let moneyError= " ";

        if(!this.state.money) {
            moneyError = " Money cannot be blank";
        }

        if(isNaN(this.state.money)){
            moneyError = " Can be only numbers "
        }

        if(userNameError || moneyError) {
            this.setState({userNameError, moneyError})
            return false;
        }

        return true;
    };  

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid){
            this.props.history.push("/Vehicles")
        }
    };
    
    render() {
        return (
         <>
         <div className="pform">
          <p>Please, complete the form below</p>
         </div>
           <div className="Form"> 
             <form onSubmit={this.handleSubmit}>
                <div>
                     <label>Name:  </label>
                    <input 
                    type="text" 
                    name='userName'
                    placeholder = "Introduce your name"
                    value={this.state.name} 
                    onChange = {this.handleChange} /><br/>
                <div className="error">{this.state.userNameError}</div>
                </div>
                <div>
                <label>What is you amount of money available: </label>
                    <input
                     type='text'
                     name='money'
                     placeholder ="Introduce your available money"
                     value={this.state.money}
                     onChange={this.handleChange} />
                <br/>
                <div className="error">{this.state.moneyError}</div>
                </div>
                <label>
                    Do you have a car?
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option choose="Yes">Yes</option>
                      <option choose="No">No</option>
                    </select>
                </label><br/>
                <input type="submit" value="Submit" />
             </form>
           </div>
        </>
        );
    }
}

export default withRouter(Form);