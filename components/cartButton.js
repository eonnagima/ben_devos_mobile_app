//cart button to navigate to cart screen

import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Foundation from '@expo/vector-icons/Foundation';

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
        <Foundation name="shopping-cart" size={28} color="#3FC427" />    
    </TouchableOpacity>
  );
};

export default CartButton;