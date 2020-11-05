import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
export default class About extends Component {
  render()
  {
      return (
      <View style={style.container}> 
          <Text>Aboutus</Text>
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

    }
  }); 
