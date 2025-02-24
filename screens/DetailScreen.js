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
    <ScrollView style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.header1}>Product</Text>
        </View>
        <View style={styles.container}>
            <Image
                source={require('../images/shoes/blaze-158-bvl_960x960_crop_center.webp')}
                style={styles.image}
            />
            <Text style={styles.header1}>Blaze 158</Text>
            <Text style={styles.productPrice}>€{170.00}</Text>
        </View>
        <View style={styles.container}>
            <Button
                title="Add to cart"
                color="#000"
                onPress = {() => alert('Added to cart')}
            />
        </View>
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
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 4,
        margin: 24,
        alignSelf: "center",
        objectFit: "contain"
    },
    productPrice:{
        fontSize: 18,
        fontFamily: 'Elza-Text-Medium',
        color: "black"
    }
});

export default ProductScreen;