import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webMap = require('../peta/map.html');

function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.listitems}>
        <Text style={styles.title}> MY MAPS</Text>
      </View>
    </ScrollView>
  );
}

function MapsScreen() {
  return <WebView source={webMap} />;
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function mahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}


function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Mahasiswa"
          component={mahasiswaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  listitems: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
  Image: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
