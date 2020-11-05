import React, { Component } from 'react';
import { StyleSheet,ScrollView,View,Text ,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import { baseUrl } from '../shared/baseURL';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cartdata: undefined,
      isLoading: true,
      email: undefined
    };
    this.getemail = this.getemail.bind(this)
  }
  getemail = async () => {
    try {
      var emailaddress= await AsyncStorage.getItem("user_email");
      console.log(emailaddress);
    } catch (error) {
      console.log('error');
    }
  }
  componentDidMount() {
      //this.getemail();
      var config = {
        method: 'post',
        url: baseUrl+'cart/get',
        data: {
          EmailAddress: window.user_email
        },
        headers: { Authorization: `Bearer ${ window.myvar }`}
      };
  
     axios(config)
      .then( response => {
        this.setState({ Cartdata: response.data });
        console.log(this.state.Cartdata);
        this.setState({ isLoading: false });
      });
  }
  render()
  {
    const {navigate} =this.props.navigation;
    const { isLoading} = this.state;
    if (isLoading) {
      return (
          <Text>Loading User Cart...</Text>
      );  
    }
      return (

        <View style={style.container}>
         <ScrollView >
         {
           this.state.Cartdata.data.map(item =>(   
            <View style={{ width:360}}>   
              <Card >
              <Image source={require('./images/Dell.jpg')} style={{width:150,height:110,alignSelf:'center'}} />
              <Text style={{color:'#883cad',fontSize:16,fontWeight: 'bold'}}>{item.Title}</Text>
              <View
                style={{ paddingTop: 10 ,borderBottomColor: 'silver', borderBottomWidth: 1, }}
                />
              <Text style={{paddingTop: 2,alignSelf:'center'}}>{item.Price}</Text>
              <TouchableOpacity style={style.button}  onPress={() => navigate('Checkout')}>
              <Text style={style.buttonstyle} >
               CHECKOUT
              </Text>
              </TouchableOpacity>
               </Card>
            </View> ))
        }
         </ScrollView>
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
    button:
        {
           
            height: 40,
            width:130,
            marginVertical: 10,
            fontSize: 16,
            borderWidth: 0.5,
            borderRadius: 25,
            borderColor: '#883cad',
            backgroundColor: '#883cad', 
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center'
        },
       buttonstyle:
       {
        fontSize:16,
        fontWeight:'500',
        color:'#fff'
       }
  }); 
