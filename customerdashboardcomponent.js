import React, { Component } from 'react';
import {StyleSheet,ScrollView, View ,Text,Image,TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import Carousel from './carousel';
import { dummyData } from '../data/dummydata';
import axios from 'axios';
import { baseUrl } from '../shared/baseURL';
import { render } from 'react-dom';
export default class CustomerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Itemdata: undefined,
      isLoading: true 
    };
    this.AddtoCart = this.AddtoCart.bind(this)
  }
  componentDidMount() {
    axios.get(baseUrl+'item/get', {headers: { Authorization: `Bearer ${ window.myvar }` }})
    .then(response => {
      this.setState({ Itemdata: response.data });
      console.log(this.state.Itemdata);
      this.setState({ isLoading: false });
    });
  }
  AddtoCart()
  {
    // var image='./images/Dell.jpg';
    // var data = new FormData();
    // data.append('Title', this.state.Itemdata.data.Title);
    // data.append('Price', this.state.Itemdata.data.Price);
    // data.append('EmailAddress', window.user_email );
    // data.append('Image', {uri: image, name: 'image.jpg', type: 'image/jpg'});

    var config = {
       method: 'post',
       url: baseUrl+'cart/post',
       data: {
        // Title: this.state.Itemdata.data.Title,
        // Price: this.state.Itemdata.data.Price,
        // EmailAddress: window.user_email
        Title: "HP OMEN 15-DH1050NR Gaming Laptop 10th Gen...",
        Price: "85,000",
        EmailAddress: window.user_email
        },
       headers: { Authorization: `Bearer ${ window.myvar }`}
   };
    
    axios(config)
    .then(function (response) {
     console.log(JSON.stringify(response.data));
   
    })
     .catch(function (error) {
     console.log(error);
    });
  }
  render()
  {
    const { navigate } = this.props.navigation;
    const { isLoading} = this.state;

    if (isLoading) {
      return (
          <Text>Loading Items...</Text>
      );  
    }

    return (
      <View style={style.container}>
         <ScrollView >
          <View style={{flexDirection: 'row'}}>
            <View style={style.SectionStyle}>
                                  
                                  <Image source={require('./images/search.png')} style={style.ImageStyle} tintColor='grey'/>

                                  <TextInput style={{flex:1}} 
                                      placeholder = "Search"
                                      autoCapitalize = "none"
                                    >  
                                      </TextInput>

          </View>
          <TouchableOpacity onPress={() => navigate('Cart')}>
          <Image source={require('./images/shopping-cart.png')} style={{ marginTop: 15,marginLeft: 5, height:40,width: 40}} tintColor='grey'  />
          </TouchableOpacity>
          </View>
        
        <Carousel data = {dummyData}/>

        {
           this.state.Itemdata.data.map(item =>(   
            <View>   
              <Card >
              <Image source={require('./images/Dell.jpg')} style={{width:150,height:110,alignSelf:'center'}} />
              <Text style={{color:'#883cad',fontSize:16,fontWeight: 'bold'}}>{item.Title}</Text>
              <Text style={{padding:5}}>{item.Specifications}</Text>
              <Text style={{padding:5}}>{item.Description}</Text>
              <View
                style={{ paddingTop: 10 ,borderBottomColor: 'silver', borderBottomWidth: 1, }}
                />
              <Text style={{paddingTop: 2,alignSelf:'center'}}>{item.Price}</Text>
              <View style={style.checkoutcart}>
                  <TouchableOpacity style={style.button} onPress={() => navigate('Checkout')} >
                  <Text style={style.buttonstyle}>
                    BUY NOW
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={style.button} onPress={this.AddtoCart}>
                  <Text style={style.buttonstyle}>
                    ADD TO CART
                  </Text>
                  </TouchableOpacity>
              </View>
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
    checkoutcart:{
      flexDirection:'row',
      alignSelf:'center'
    },
    SectionStyle: {
      flexDirection: 'row',
      width:290,
      height: 50,
      padding: 10,
      marginLeft:10,
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
          width:130,
          height: 45,
          marginVertical: 10,
          marginHorizontal: 10,
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