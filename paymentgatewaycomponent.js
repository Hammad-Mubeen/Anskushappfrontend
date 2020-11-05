import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
const params = {
  // mandatory
  number: '4242424242424242',
  expMonth: 11,
  expYear: 17,
  cvc: '223',
  // optional
  name: 'Test User',
  currency: 'usd',
  addressLine1: '123 Test Street',
  addressLine2: 'Apt. 5',
  addressCity: 'Test City',
  addressState: 'Test State',
  addressCountry: 'Test Country',
  addressZip: '55555',
};
export default class Paymentgateway extends Component {

  componentDidMount()
  {
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_51HUCRnIC07vUSXLsRv6XtwhK8hoNlBV4AG8Nn0wUsBX8PaU0htAui2CvIpWniZJMFwypwnB9WCkJZCUIuqXuEbHi00af2NsVgV', // Your key
      androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
      merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
    }); 
  }
  async payment() {
    try {
      const token = await Stripe.createTokenWithCardAsync(params);
      // Client specific code
      // api.sendTokenToBackend(token)
    } catch (err) {
      console.log(`The error is: ${err}`)
    }
  }
  render()
  {
      this.payment();
      return (
      <View style={style.container}> 
          <Text>Paymentgateway</Text>
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
