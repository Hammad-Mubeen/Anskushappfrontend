import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
export default class Rateus extends Component {
  ratingCompleted(rating) 
  {
    console.log("Rating is: " + rating);
  }
  render()
  {
    
   
      return (
        <View>
       <AirbnbRating />
 
     <AirbnbRating
      count={11}
      reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
      defaultRating={11}
      size={20}
    />
  
    <Rating
    showRating
    onFinishRating={this.ratingCompleted}
    style={{ paddingVertical: 10 }}
   />
  
   <Rating
    type='heart'
    ratingCount={3}
    imageSize={60}
    showRating
    onFinishRating={this.ratingCompleted}
   />
  
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
