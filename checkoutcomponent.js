import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Checkout extends Component {
  render()
  {
    const {navigate} =this.props.navigation;
      return (
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={style.container}> 
                  <Text style={{color:'#883cad',fontSize:20,alignSelf:'center',marginTop:30,marginBottom:10,fontWeight: 'bold'}}>BILLING AND SHIPMENT </Text>

                  <View style={style.SectionStyle}>
                  <Image source={require('./images/email.png')} style={style.ImageStyle} tintColor='grey'/>
                  <TextInput style={{flex:1}} placeholder="Shipment Address" autoCapitalize = "none" >
                          </TextInput>
                  </View>
                  <View style={style.SectionStyle}>
                  <Image source={require('./images/home.png')} style={style.ImageStyle} tintColor='grey'/>
                  <TextInput style={{flex:1}} placeholder="City" autoCapitalize = "none" >
                          </TextInput>
                  </View>
                  <View style={style.SectionStyle}>
                  <Image source={require('./images/home.png')} style={style.ImageStyle} tintColor='grey'/>
                  <TextInput style={{flex:1}} placeholder="District" autoCapitalize = "none" >
                          </TextInput>
                  </View>
                  <View style={style.SectionStyle}>
                  <Image source={require('./images/email.png')} style={style.ImageStyle} tintColor='grey'/>
                  <TextInput style={{flex:1}} placeholder="Email Address" autoCapitalize = "none" >
                          </TextInput>
                  </View>
                  <View style={style.SectionStyle}>
                  <Image source={require('./images/telephone.png')} style={style.ImageStyle} tintColor='grey'/>
                  <TextInput style={{flex:1}} placeholder="Contact No" autoCapitalize = "none" >
                          </TextInput>
                  </View>
                  <TouchableOpacity style={style.button} onPress={() => navigate('Paymentgateway')}>
                                    <Text style={style.buttonstyle}>
                                        PROCEED TO PAYMENT
                                    </Text>
                  </TouchableOpacity>
        </View>
        </ScrollView>
      
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
    button:
    {
        width:200,
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
  }); 
