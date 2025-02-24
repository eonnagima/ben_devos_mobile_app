import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ProductCard from '../components/productCard';
import * as Font from 'expo-font';

const ProductScreen = ({navigation}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
      async function loadFonts() {
          await Font.loadAsync({
              'Larken-Thin': require('../assets/fonts/larkenThin.otf'),
              'Larken-Light': require('../assets/fonts/larkenLight.otf'),
              'Larken-Regular': require('../assets/fonts/larkenRegular.otf'),
              'Larken-Medium': require('../assets/fonts/larkenMedium.otf'),
              'Larken-Bold': require('../assets/fonts/larkenBold.otf'),
              'Larken-ExtraBold': require('../assets/fonts/larkenExtrabold.otf'),
              'Elza-Text-Medium': require('../assets/fonts/elzaTextMedium.otf')
          });
          setFontsLoaded(true);
      }

      loadFonts();
  }, []);

  if (!fontsLoaded) {
      return <Text>Loading Fonts...</Text>;
  }

return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header1}>Product</Text>
        </View>
        <View>
            <Text>Some Details</Text>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 40,
      paddingHorizontal: 20
    },
    header1: {
      fontSize: 32,
      color: 'black',
      textAlign: 'center',
      marginTop: 20,
      fontFamily: 'Larken-ExtraBold',
      textTransform: 'uppercase'
    }
});

export default ProductScreen;