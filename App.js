import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import * as Font from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}