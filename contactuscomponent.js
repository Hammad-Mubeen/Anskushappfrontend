import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card } from 'react-native-elements';
export default class Contactus extends Component {
  render()
  {
      return (
        <Card>
          <View >
          <Text  style={{textAlign: "center",fontSize: 16,fontWeight: "bold"}}>Contact Information</Text>
          </View>
        <View
            style={{ paddingTop: 15 ,borderBottomColor: 'silver', borderBottomWidth: 1, }}
            />
        <View style={{paddingTop: 25}}>
            <Text  style={{fontSize: 15}}>
            121, Clear Water Bay Road 
            Clear Water Bay, Kowloon 
            HONG KONG</Text> 
        </View>
        <View style={{paddingTop: 23}}>
            <Text  style={{fontSize: 15}}>
            Tel: +852 1234 5678</Text> 
        </View>  
        <View style={{paddingTop: 23}}>
            <Text  style={{fontSize: 15}}>
            Fax: +852 8765 4321</Text> 
        </View>
        <View style={{paddingTop: 23}}>
            <Text  style={{fontSize: 15}}>
            Email: anskush@SellAndBuy.net</Text> 
        </View>  
      </Card>
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

    }
  }); 
