import React, { Component } from 'react';
import { StyleSheet,Text, Image, View, TextInput ,TouchableOpacity,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { baseUrl } from '../shared/baseURL';
export default class Login extends Component {

  constructor()
  {
    super();
    this.state = {
      email:'',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleemail = (text) => {
    window.user_email=text;
    this.setState({ email: text });
  }
  handlepassword = (text) => {
    this.setState({ password: text })
  }
  setemail = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('error')
    }
  }
  handleSubmit () 
  {
      axios
        .post(baseUrl+"user/login", {
          EmailAddress: this.state.email,
          Password: this.state.password,
          
        })
        .then(async (response) => {
            console.log(response.data)
            if (response.status == 200) {
             
              console.log(response.status);
              if(window.myvar=="seller")
              {
                window.myvar=response.data.token;
                Actions.sellerdrawer();
              }
              else{
                window.myvar=response.data.token;
                Actions.customerdrawer();
              }
            }
            else if (response.status == 409) {
              console.log(response.status);
            }
            else {
              console.log(response.status);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
       
  }
    signupcall()
    {
      Actions.signup();
    }
    render()
    {
      return (
        <View style={style.container}>
               
                                <Image style={style.imagestyle}
                                source={require('./images/cover.png')}
                            />
                  
                            <View style={style.SectionStyle}>

                            <Image source={require('./images/email.png')} style={style.ImageStyle} tintColor='grey'/>
 
                            <TextInput style={{flex:1}} placeholder="Email Address" autoCapitalize = "none" onChangeText = {this.handleemail}>
                                    </TextInput>
 
                            </View>
                            <View style={style.SectionStyle}>
 
                            <Image source={require('./images/key.png')} style={style.ImageStyle} tintColor='grey'/>
 
                            <TextInput style={{flex:1}} placeholder="Password" secureTextEntry={true} autoCapitalize = "none"
                                    onChangeText = {this.handlepassword}>  
                                    </TextInput>
 
                            </View>
                                <TouchableOpacity style={style.button} onPress = {this.handleSubmit}>
                                    <Text style={style.buttonstyle}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                                <View style={style.signupstyle}>
                                <Text style={style.signuptext}>Don't have an account yet?</Text> 
                                <TouchableOpacity onPress = {this.signupcall}>
                                    <Text style={style.signupbutton}>
                                    Signup
                                    </Text>
                                </TouchableOpacity> 
                                </View>
                                
                      
                </View>
                             
      );
    }
}

const style= StyleSheet.create(
    {
      container:{
        backgroundColor: '#fff',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:290,
        height: 50,
        padding: 10,
        marginVertical: 10,
        fontSize: 16,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#C0C0C0',
        backgroundColor: 'rgba(0,0,0,0)', 
    },
     
      ImageStyle: {
          padding: 10,
          margin: 5,
          height: 20,
          width: 20,
          resizeMode : 'stretch',
          alignItems: 'center',
           backgroundColor: 'rgba(0,0,0,0)',
      },
      imagestyle:{
          width:190,
        height:200,
        },
      textstyle:{
        marginVertical:10,
        fontSize:16,
        opacity:8
      },
      signupstyle:
      {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      },
      signuptext:
      {
        fontSize:14,
        opacity:0.5
      },
      signupbutton:{
        fontSize:14,
        opacity:1
      },
        button:
        {
            width:150,
            height: 50,
            marginVertical: 10,
            fontSize: 16,
            borderWidth: 0.5,
            borderRadius: 25,
            borderColor: '#883cad',
            backgroundColor: '#883cad', 
            alignItems: 'center',
            justifyContent: 'center'
        },
       buttonstyle:
       {
        fontSize:16,
        fontWeight:'500',
        color:'#fff'

       }
    }
  );