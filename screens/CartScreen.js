//Cart Screen with empty state handling, total price calculation, and cart item management

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCartStore } from '../store/useCart';
import CustomButton from '../components/button';
import { useNavigation } from '@react-navigation/native';

const CartScreen = ({navigation}) => {
    const cartItems = useCartStore(state => state.cartItems);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const increaseAmount = useCartStore(state => state.increaseAmount);
    const decreaseAmount = useCartStore(state => state.decreaseAmount);
    const clearCart = useCartStore(state => state.clearCart);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.header1}>My Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={{fontFamily: 'Elza-Text-Medium'}}>Your cart is empty</Text>}
                renderItem={({ item }) => (
                    <View style={styles.cartCard}>
                        <View style={styles.itemContainer}>
                            {/* Left Column */}
                            <View style={styles.leftColumn}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text>Price: €{item.price}</Text>
                            <View style={styles.quantityControls}>
                                <TouchableOpacity onPress={() => decreaseAmount(item.id)}>
                                <Text style={styles.controlButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.amount}>{item.amount}</Text>
                                <TouchableOpacity onPress={() => increaseAmount(item.id)}>
                                <Text style={styles.controlButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>Total: €{(item.amount * item.price).toFixed(2)}</Text>
                            </View>

                            {/* Right Column (Image) */}
                            <View style={styles.rightColumn}>
                            <Image
                                source={item.mainImage}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            </View>
                        </View>
                        <CustomButton
                            title="Remove"
                            onPress={() => removeFromCart(item.id)}
                            mainColor="#C71C18"
                            activeColor="#FF787E"
                        />
                    </View>
                )}
            />
            {cartItems.length > 0 && (
                <View style={styles.footer}>
                    <Text style={styles.total}>Total: €{totalPrice.toFixed(2)}</Text>
                    <CustomButton
                        title="Clear Cart"
                        onPress={clearCart}
                        mainColor="#C71C18"
                        activeColor="#FF787E"
                    />
                    <CustomButton
                        title="Checkout"
                        onPress={() => navigation.navigate('Order Confirmed')}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    header1: {
      fontSize: 32,
      color: 'black',
      textAlign: 'center',
      marginVertical: 20,
      fontFamily: 'Larken-ExtraBold',
      textTransform: 'uppercase',
    },
    cartCard: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    leftColumn: {
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 15,
    },
    rightColumn: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    name: { 
        fontWeight: 'bold', 
        fontSize: 16, 
        marginBottom: 5 ,
        fontFamily: 'Elza-Text-Medium', 
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        gap: 10,
    },
    controlButton: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Elza-Text-Medium', 
    },
    footer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 20,
    },
    total: { 
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Elza-Text-Medium', 
    }
});

export default CartScreen;
