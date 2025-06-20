import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {useFonts} from 'expo-font';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import * as Font from 'expo-font';
import Toast from 'react-native-toast-message';
import toastConfig from './components/toastConfig';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import BlogsScreen from './screens/BlogsScreen';
import BlogPostScreen from './screens/BlogPostScreen';
import LooksScreen from './screens/LooksScreen';
import LookImageScreen from './screens/LookImageScreen';
import CartScreen from './screens/CartScreen';
import OrderConfirmScreen from './screens/OrderConfirmScreen';

import CartButton from './components/cartButton';


const Stack = createStackNavigator();

export default function App() {
  //import and load custom fonts
  const [fontsLoaded] = useFonts({
    'Larken-Thin': require('./assets/fonts/larkenThin.otf'),
    'Larken-Light': require('./assets/fonts/larkenLight.otf'),
    'Larken-Regular': require('./assets/fonts/larkenRegular.otf'),
    'Larken-Medium': require('./assets/fonts/larkenMedium.otf'),
    'Larken-Bold': require('./assets/fonts/larkenBold.otf'),
    'Larken-ExtraBold': require('./assets/fonts/larkenExtrabold.otf'),
    'Elza-Text-Medium': require('./assets/fonts/elzaTextMedium.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading Fonts...</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a1b1e',
            },
            headerTintColor: '#3FC427',
            headerTitleStyle: {
              fontFamily: 'Larken-Bold',
              fontSize: 24,
            },
            headerRight: () => <CartButton/>
          }}
          >
          <Stack.Screen name="Home" component={HomeScreen}/>

          <Stack.Screen name="Products" component={ProductsScreen}/>
          <Stack.Screen name="ProductDetails" component={ProductDetailScreen}/>

          <Stack.Screen name="Blogs" component={BlogsScreen}/>
          <Stack.Screen name="BlogPost" component={BlogPostScreen}/>

          <Stack.Screen name="Looks" component={LooksScreen}/>
          <Stack.Screen name="Look Image" component={LookImageScreen}/>
          
          <Stack.Screen name="Cart" component={CartScreen}/>
          <Stack.Screen name="Order Confirmed" component={OrderConfirmScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
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

// <> </> =>  React Fragment = lets me group these elements as return expects only one element. Cleaner than using a View