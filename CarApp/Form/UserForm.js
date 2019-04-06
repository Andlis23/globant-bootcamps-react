import React, {Fragment} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Icon} from 'react-native';
import Header from '../DrawerNavigator/Header'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            money:    '',
            checked:  false,
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
        let userNameError= "";
        let moneyError= "";

        if(!this.state.userName) {
            userNameError= " Name cannot be blank";
        }

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
         <Header navigation={this.props.navigation} />
         <View>
         <Image 
              style={{width:300, height: 200, marginHorizontal: 30, marginTop:20}}
              source={require('../Image/form.jpg')}/>
          <Text style={styles.Title}>Please complete the form to access</Text>
         </View>
         <View> 
            <View>
              <TextInput 
                style={styles.Input}
                placeholder = "Introduce your name here" 
                textContentType='name' />
            </View>
            
            <View>
              <TextInput
                style={styles.Input}
                placeholder ="Introduce your available money" />
            </View>
            
            <View>
              <TextInput
                style={styles.Input}
                placeholder ="Do you have a car?" />
            </View>

            <TouchableOpacity style={styles.Btn}>
              <Text style={styles.BtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </>
        );
    }
}
export default UserForm;

const styles = StyleSheet.create({
Title: {
  fontWeight: 'bold',
  fontSize: 15,
  marginTop: 20,
  marginBottom: 15,
  textAlign:'center'
},

Input: {
  height: 40,
  backgroundColor: '#B0ADAD',
  marginBottom: 20,
  marginHorizontal: 20,
  paddingHorizontal: 10,
  color: '#504d4d'
},

Btn:{
  backgroundColor: '#c81e1e',
  paddingVertical: 10,
  marginHorizontal:20,
},

BtnText:{
  textAlign:'center',
  color:'#FFF'
}
})