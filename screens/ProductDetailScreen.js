// Detailed overview of products

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, Touchable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import * as Font from 'expo-font';
import Toast from 'react-native-toast-message';

import {useCartStore} from '../store/useCart.js';
import CustomButton from '../components/button.js'; 


const ProductDetailScreen = ({route}) => {
    const product = route.params;
    const [quantity, setQuantity] = useState(1);

    const addToCart = useCartStore(state => state.addToCart);

    const increaseQuantity = () => { setQuantity(quantity + 1); }
    const decreaseQuantity = () => { 
        if (quantity > 1) {
            setQuantity(quantity - 1); 
        }
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            mainImage: product.mainImage,
            price: product.price,
            amount: quantity,  // use the current quantity
        });

        Toast.show({
            type: 'success',
            text1: `${product.name} added to cart`,
            position: 'bottom',
            visibilityTime: 3000, //3s
        });
    }

return (
    <ScrollView style={styles.background}>
            <View style={styles.container}>
                <Image
                    source={product.mainImage}
                    style={styles.image}
                />
                <Text style={styles.header1}>{product.name}</Text>
                <Text style={styles.productPrice}>€{product.price * quantity}</Text>
            </View>
        <View style={styles.quantity}>
            <TouchableOpacity onPress={decreaseQuantity}>
                <Text style={styles.productPrice}>-</Text>
            </TouchableOpacity>
            <Text style={styles.productPrice}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
                <Text style={styles.productPrice}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <CustomButton
                title="Add to Cart"
                onPress={handleAddToCart}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.productDescription}>
                {product.description}
            </Text>
        </View>
    {product.otherImages && product.otherImages.length > 0 && ( //if there are more than just the main image, display them here
    <View style={styles.otherImagesContainer}>
        {product.otherImages.map((img, index) => (
        <Image
            key={index}
            source={img}
            style={styles.image}
        />
        ))}
    </View>
    )}
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
    quantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginVertical: 20,

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
    },
    productDescription: {
        fontFamily: 'Elza-Text-Medium', 
        color: 'black', 
        textAlign: 'left',
        lineHeight: 20,
    }
});

export default ProductDetailScreen;