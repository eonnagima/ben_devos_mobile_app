import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ProductCard from '../components/productCard';
import * as Font from 'expo-font';

import Blaze158Img from '../images/shoes/blaze-158-bvl_960x960_crop_center.webp';
import Shaker70Img from '../images/shoes/shaker-70-bvl_960x960_crop_center.webp';
import Camel311Img from '../images/shoes/camel-311-bsue_d514108e-f2ef-4e4b-8daa-44ac2fd9b95e_960x960_crop_center.webp';

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
    <ScrollView style={styles.background}>
        <View style={styles.container}>
        <Text style={styles.header1}>Home</Text>
        </View>
        <ProductCard 
            imageSource={Blaze158Img}
            productName="Blaze 158"
            productPrice="170.00"
        />
        <ProductCard 
            imageSource={Shaker70Img}
            productName="Shaker 70"
            productPrice="155.00"
        />
        <ProductCard 
            imageSource={Camel311Img}
            productName="Camel 311"
            productPrice="160.00"
        />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#fff'
    },
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