import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './logincomponent';
import Signup from './signupcomponent';
import SellerDrawer from './sellerdrawercomponent';
import CustomerDrawer from './customerdrawercomponent';
import SellerorCustomer from './sellerorcustomercomponent';

const Routes = () => ( 
   <Router>
      <Scene key = "root" hideNavBar={true}>
         <Scene key = "sellerdrawer" component = {SellerDrawer} title = "Drawer" />
         <Scene key = "customerdrawer" component = {CustomerDrawer} title = "Drawer" />
         <Scene key = "signup" component = {Signup} title = "Signup" />
         <Scene key = "login" component = {Login} title = "Signin" />
         <Scene key = "sellerorcustomer" component = {SellerorCustomer} title = "SellerorCustomer" initial = {true}/>
      </Scene>
   </Router>
)
export default Routes