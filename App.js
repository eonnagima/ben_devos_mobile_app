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
        <Stack.Screen name="ProductDetails" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Een API is een link waarmee je data tussen twee systemen kan uitwisselen. Dit kan 2 websites zijn, een website en een app, etc

//Bearer = Laat zien dat jij het bent? 

//Tip als je aan JSON niet uitkan, vraag aan chatGPT om een duidelijker overzicht te genereren van je data.

//Render is een tool voor APIs 

// .map() = Een functie die je kan gebruiken om door een array te loopen


/*
Arrow Functions = een manier om functies korter en leesbaarder op te stellen en gebruiken.

Spread Syntax (met de ...) = Je maakt een copy van een array, zonder deze te veranderen of volledig op te willen lijsten

Array / Object destructuring = Een array opentrekken en opslitsen in losse variabelen

Array Methodes:
- filter() = maakt nieuwe array met enkel de elementen die voldoen aan een bepaalde voorwaarde
- map() = loopen over data
- sort() = Items rangschikken in een array
*/