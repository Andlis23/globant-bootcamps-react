import React, {Fragment} from 'react';
import './Style/Form.css';
import { Redirect } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: ''
            userName: '',
            money:    '',
            choose:   'Yes',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name  = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value})
    };

    handleSubmit = () => {
        this.setState({
            redirect:true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Vehicles' />
        }
    }
    
    render() {
        return (
         <>
          <p>Please, complete the form below</p>
           <div className="Form"> 
             {this.renderRedirect()}
             <form onSubmit={this.handleSubmit}>
                <label>
                    Name: 
                    <input 
                    type="text" 
                    name='userName'
                    value={this.state.name} 
                    onChange = {this.handleChange} required/>
                </label><br/>
                <label>
                    What is you amount of money available: 
                    <input
                     type='text'
                     name='money'
                     value={this.state.money}
                     onChange={this.handleChange} required/>
                </label><br/>
                <label>
                    Do you have a car?
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option choose="Yes">Yes</option>
                      <option choose="No">No</option>
                    </select>
                </label><br/>
                <input type="submit" value="Submit" className="Submit"/>
             </form>
           </div>
        </>
        );
    }
}

export default Form;