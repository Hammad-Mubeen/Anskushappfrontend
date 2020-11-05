import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import CustomerDashboard from './customerdashboardcomponent';
import Privacypolicy from './privacypolicycomponent';
import Contactus from './contactuscomponent';
import About from './Aboutcomponent';
import Rateus from './rateuscomponent';
import Pushnotification from './pushnotificationcomponent';
import Paymentgateway from './paymentgatewaycomponent';
import MyQR from './myQRcomponent';
import Settings from './settingscomponent';
import MAP from './mapcomponent';
import Logout from './logoutcomponent';
import Cart from './cartcomponent';
import Checkout from './checkoutcomponent';


const HeaderOptions = {
  headerStyle: {
      backgroundColor: "#883cad"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
      color: "#fff"            
  }
};
const HeaderOptionslogout = {
    headerStyle: {
        backgroundColor: "#fff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
  };
const CustomDrawerContentComponent = (props) => (
  <ScrollView>
      <View style={styles.drawerHeader}>
          <View>
              <Image 
                  source={require('./images/user.png')}
                  style={{width: 100, height: 100 ,marginTop:20,overflow: "hidden",borderWidth: 3,borderColor: "#fff",borderRadius: 100,}}
              />
          </View>
          <View>
              <Text style={styles.drawerHeaderText}>
                  Hammad887
              </Text>
          </View>
      </View>
      <DrawerItemList {...props}/>
  </ScrollView>
);
const MAPNavigator = createStackNavigator();
function MAPScreen() {
  return(
      <MAPNavigator.Navigator
          initialRouteName='MAP'
          screenOptions={HeaderOptions}
      >
          <MAPNavigator.Screen
              name="MAP"
              component={MAP}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </MAPNavigator.Navigator>
  );
}
const DashboardNavigator = createStackNavigator();
function DashboardScreen() {
  return(
      <DashboardNavigator.Navigator
          initialRouteName='CustomerDashboard'
          screenOptions={HeaderOptions}
      >
          <DashboardNavigator.Screen
              name="Market Place"
              component={CustomerDashboard}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
            <DashboardNavigator.Screen
                name="Cart"
                component={Cart}
                options={{ headerTitle: "Cart"}}
            />
            <DashboardNavigator.Screen
                name="Checkout"
                component={Checkout}
                options={{ headerTitle: "Checkout"}}
            />
            <DashboardNavigator.Screen
                name="Paymentgateway"
                component={Paymentgateway}
                options={{ headerTitle: "Payment Gateway"}}
            />
      </DashboardNavigator.Navigator>
  );
}
const PrivacypolicyNavigator = createStackNavigator();
function PrivacypolicyScreen() {
  return(
      <PrivacypolicyNavigator.Navigator
          initialRouteName='Privacy Policy'
          screenOptions={HeaderOptions}
      >
          <PrivacypolicyNavigator.Screen
              name="Privacy Policy"
              component={Privacypolicy}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </PrivacypolicyNavigator.Navigator>
  );
}
const ContactusNavigator = createStackNavigator();
function ContactusScreen() {
  return(
      <ContactusNavigator.Navigator
          initialRouteName='Contact Us'
          screenOptions={HeaderOptions}
      >
          <ContactusNavigator.Screen
              name="Contact Us"
              component={Contactus}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </ContactusNavigator.Navigator>
  );
}
const AboutNavigator = createStackNavigator();
function AboutScreen() {
  return(
      <AboutNavigator.Navigator
          initialRouteName='About Us'
          screenOptions={HeaderOptions}
      >
          <AboutNavigator.Screen
              name="About Us"
              component={About}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </AboutNavigator.Navigator>
  );
}
const RateusNavigator = createStackNavigator();
function RateusScreen() {
  return(
      <RateusNavigator.Navigator
          initialRouteName='Rate Us'
          screenOptions={HeaderOptions}
      >
          <RateusNavigator.Screen
              name="Rate Us"
              component={Rateus}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </RateusNavigator.Navigator>
  );
}
const PushnotificationNavigator = createStackNavigator();
function PushnotificationScreen() {
  return(
      <PushnotificationNavigator.Navigator
          initialRouteName='Push Notification'
          screenOptions={HeaderOptions}
      >
          <PushnotificationNavigator.Screen
              name="Push Notification"
              component={Pushnotification}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </PushnotificationNavigator.Navigator>
  );
}
const MyQRNavigator = createStackNavigator();
function MyQRScreen() {
  return(
      <MyQRNavigator.Navigator
          initialRouteName='My QR'
          screenOptions={HeaderOptions}
      >
          <MyQRNavigator.Screen
              name="My QR"
              component={MyQR}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </MyQRNavigator.Navigator>
  );
}
const SettingsNavigator = createStackNavigator();
function SettingsScreen() {
  return(
      <SettingsNavigator.Navigator
          initialRouteName='Settings'
          screenOptions={HeaderOptions}
      >
          <SettingsNavigator.Screen
              name="Settings"
              component={Settings}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              
                              onPress={() => 
                        navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </SettingsNavigator.Navigator>
  );
}
const logoutNavigator = createStackNavigator();
function logoutScreen() {
  return(
      <logoutNavigator.Navigator
          initialRouteName='Logout'
          screenOptions={HeaderOptionslogout}
      >
          <logoutNavigator.Screen
              name="Logout"
              component={Logout}
              options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon style={{paddingLeft:20}} 
                              name='menu' 
                              size={24}
                              color='white'
                              onPress={() => 
                                  navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
          />
      </logoutNavigator.Navigator>
  );
}
const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
    return(
        <MainNavigator.Navigator 
            initialRouteName="MAP"
            drawerStyle={{
                backgroundColor:'#fff'
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props}/>}
        >
            <MainNavigator.Screen 
                name="MAP"   
                component={MAPScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:5}}
                            name='map-marker'
                            type='font-awesome'
                            size={30}
                            color='grey'
                            
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name="Market Place"   
                component={DashboardScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:2}}
                            name='home'
                            type='font-awesome'
                            size={24}
                            color='grey'
                            
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Privacy Policy'   
                component={PrivacypolicyScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:5}}
                            name='lock'
                            type='font-awesome'
                            size={28}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Contact Us'   
                component={ContactusScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:3}}
                            name='phone'
                            type='font-awesome'
                            size={24}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='About Us'   
                component={AboutScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:7}}
                            name='info'
                            type='font-awesome'
                            size={40}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Rate us'   
                component={RateusScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon 
                            name='star'
                            type='font-awesome'
                            size={24}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Push Notification'   
                component={PushnotificationScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='bell'
                            type='font-awesome'
                            size={24}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='My QR'   
                component={MyQRScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon style={{marginLeft:2}}
                            name='qrcode'
                            type='font-awesome'
                            size={24}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Settings'   
                component={SettingsScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='menu'
                            size={22}
                            color='grey'
                        />
                    )
                }}                
            />
            <MainNavigator.Screen 
                name='Logout'   
                component={logoutScreen} 
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='sign-out'
                            type='font-awesome'
                            size={24}
                            color='grey'
                        />
                    )
                }}                
            />
         </MainNavigator.Navigator>
    );
}
export default class CustomerDrawer extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <MainNavigatorDrawer/>
      </NavigationContainer>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#883cad',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
