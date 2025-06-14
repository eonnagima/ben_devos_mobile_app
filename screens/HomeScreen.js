import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ProductCard from '../components/productCard';
import * as Font from 'expo-font';

import Blaze158Img from '../images/shoes/blaze-158-bvl_960x960_crop_center.webp';
import Shaker70Img from '../images/shoes/shaker-70-bvl_960x960_crop_center.webp';
import Camel311Img from '../images/shoes/camel-311-bsue_d514108e-f2ef-4e4b-8daa-44ac2fd9b95e_960x960_crop_center.webp';

const HomeScreen = ({navigation}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load custom fonts
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

    fetch(
        'https://api.webflow.com/v2/sites/67ab9628a0b2d39659eb5d0f/products',
        {
            headers:{
                Authorization:
                    'Bearer 2413f031b22cff97341a824f2b2b621db2bac9425f28183195bf294812f1520f',
            },
        }
    )
        .then((res) => res.json()) //res = response
        .then((data) => {
            setProducts(
                data.items.map((item) => ({
                    id: item.product.id,
                    name: item.product.fieldData.name,
                    description: item.product.fieldData.description,
                    price: (item.skus[0]?.fieldData.price.value || 0) / 100, //convert cents to euros
                    mainImage: {uri: item.skus[0]?.fieldData["main-image"]?.url },
                    otherImages: (item.skus[0]?.fieldData["more-images"] || []).map(img => ({ uri: img.url })),
                }))
            )
        })
        .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (!fontsLoaded) {
      return <Text>Loading Fonts...</Text>;
  }

return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
        <Text style={styles.header1}>Shoes</Text>
        </View>
        <View>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    mainImage={product.mainImage}
                    onPress={() => navigation.navigate('ProductDetails', product)}
                />
            ))}
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
    }
});

export default HomeScreen;