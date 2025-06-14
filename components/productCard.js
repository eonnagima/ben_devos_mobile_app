//Product Card to be used in the products overview screen

import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useCartStore } from '../store/useCart.js';
import Toast from 'react-native-toast-message';
import CustomButton from '../components/button.js'; 

const ProductCard = ({ id, mainImage, name, price, onPress }) => {
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      mainImage,
      price,
      amount: 1,  // default amount on each tap
    });

    Toast.show({
        type: 'success',
        text1: `${name} added to cart`,
        position: 'bottom',
        visibilityTime: 3000, //3s
  });
  };

  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={mainImage}
          style={styles.image}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>€{price}</Text>
        </View>
      </TouchableOpacity>
      <CustomButton
        title="Add to Cart"
        onPress={handleAddToCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    marginHorizontal: 40,
    marginVertical: 20,
    backgroundColor: '#f8f9f8',
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 4,
    margin: 24,
    alignSelf: "center",
    resizeMode: "contain",
  },
  cardTextContainer: {
    margin: 8,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Larken-Bold',
    color: "black",
  },
  productPrice: {
    fontSize: 18,
    fontFamily: 'Elza-Text-Medium',
    color: "black",
  },
});

export default ProductCard;
