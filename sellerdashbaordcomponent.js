import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function TotalSalesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TotalSales</Text>
    </View>
  );
}

function TotalFollowingUsersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Following Users</Text>
    </View>
  );
}

function TotalCheckInUsersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total CheckIn Users</Text>
    </View>
  );
}

function TokensScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tokens</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TotalSales" component={TotalSalesScreen} />
      <Tab.Screen name="TotalFollowingUsers" component={TotalFollowingUsersScreen} />
      <Tab.Screen name="TotalCheckInUsers" component={TotalCheckInUsersScreen} />
      <Tab.Screen name="Tokens" component={TokensScreen} />
    </Tab.Navigator>
  );
}

export default function SellerDashboard() {
  return (
      <MyTabs />
  );
}
