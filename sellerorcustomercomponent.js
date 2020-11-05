import React, { Component } from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class SellerorCustomer extends Component {
  Sellerlogin()
  {
    window.myvar="seller";
    Actions.login();
  }
  Customerlogin()
  {
    window.myvar="customer";
    Actions.login();
  }
  render()
  {
      return (

      <View style={style.container}>
        <View>
        <Image style={style.imagestyle}
                               source={require('./images/cover.png')}></Image>
        </View>
        <View style={{marginTop:10}}>
        <TouchableOpacity style={style.button} onPress = {this.Sellerlogin}>
                                   <Text style={style.buttonstyle}>
                                       Seller
                                   </Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:15}}>
          <Text  style={style.text}>Or</Text>
        </View>
        <View style={{marginTop:15}}>
        <TouchableOpacity style={style.button} onPress = {this.Customerlogin}>
                                   <Text style={style.buttonstyle}>
                                       Customer
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
      imagestyle:{
        width:200,
        height:200,
        marginBottom:10
        },
    text:
    {
      opacity:0.2
    },
    button:
    {
        width:190,
        height: 45,
        fontSize: 16,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: '#883cad',
        backgroundColor: '#883cad', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonstyle:{

    fontSize:16,
    fontWeight:'500',
    color:'#fff'

    }
  }); 
