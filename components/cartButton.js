import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
      <Text style={{color: '#fff', fontSize: 18}}>Cart</Text> 
    </TouchableOpacity>
  );
};

export default CartButton;