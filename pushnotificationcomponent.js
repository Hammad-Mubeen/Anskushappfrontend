import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet,TouchableOpacity,Text, View, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <View
          style={{
            marginTop:200,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
    
      <View style={{ marginBottom:10,alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={async () => {await sendPushNotification();}}>
                                    <Text style={style.buttonstyle}>
                                        Send Notification
                                    </Text>
      </TouchableOpacity>
    </View>
  );
}

async function sendPushNotification(expoPushToken) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Product Notification:",
      body: 'Your Product is arriving at your location.',
      data: { data: 'Product Id: 1' },
    },
    trigger: { seconds: 4 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const style= StyleSheet.create(
  {
      button:
      {
          width:150,
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
  }
);