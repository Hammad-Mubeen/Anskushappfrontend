import React from 'react';
import MapView, { Marker,Callout } from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions,Image,TouchableOpacity} from 'react-native';
//import Drawer from 'react-native-drawer';

var markersdata=[
{
      Title:"Seller 1",
      Name: "Muhammad Hammad Mubeen",
      markerKey:1,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  },{
    Title:"Seller 2",
    Name: "Muhammad Adrees",
    markerKey:2,
    latitude: 37.76825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    date: "2020-09-07T12:10:19.743Z"
  }
  ,{
    Title:"Seller 3",
    Name: "Zain Yazdan",
    markerKey:3,
    latitude: 37.75825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    date: "2020-09-07T12:10:19.743Z"
  }
] ;
export default class MAP extends React.Component {
  
  renderDrawer() {
      
    return (
        <View>
            <Text>Hammad</Text>
        </View>
    )
  }

  render() {
    
    
    return (
         <View style={styles.container}>
          {/* <Drawer
                        
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        tapToClose={true}
                        openDrawerOffset={0.35}
            >
        </Drawer>    */}
        <MapView style={styles.mapStyle} initialRegion={{
                                  latitude: 37.78825,
                                  longitude: -122.4324,
                                  latitudeDelta: 0.0922,
                                  longitudeDelta: 0.0421,
                                }} 
                                >             
                                    {
                                      markersdata.map(marker =>(
                                        <Marker draggable
                                          key={marker.markerKey}
                                          coordinate={{ latitude:marker.latitude, longitude:marker.longitude, latitudeDelta:marker.latitudeDelta , longitudeDelta: marker.longitudeDelta}}
                                         // onPress={() => {this._drawer.open()}}
                                        >
                                          <Image source={require('./images/user.png')}  style={{width:40,height:40}}></Image>
                                            <Callout style={{width:210, alignContent:'center',alignItems:'center'}}>
                                            <Text style={{opacity:0.5}}>Title : {marker.Title}</Text>
                                            <Text style={{opacity:0.5}}>Name: {marker.Name}</Text>            
                                            </Callout>
                                        </Marker>
                                      ))
                                    }

                      </MapView>  
      </View>
    
    );
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
