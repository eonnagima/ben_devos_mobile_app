import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import * as Font from 'expo-font';
import{ DEMONIA_WEBFLOW_API_KEY} from '@env';

import ProductCard from '../components/productCard';

const ProductsScreen = ({navigation}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.webflow.com/v2/sites/67ab9628a0b2d39659eb5d0f/products',
            {
                headers:{
                    Authorization:
                        `Bearer ${DEMONIA_WEBFLOW_API_KEY}`,
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

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.header1}>All Shoes</Text>
            </View>
            <View>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        mainImage={product.mainImage}
                        price={product.price}
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
    },

});

export default ProductsScreen;