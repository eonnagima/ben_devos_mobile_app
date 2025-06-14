//Order Confirmation screen to finish up the order product flow. Skips payment and shipping details for simplicity.

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import {NavigationContainer, useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCartStore } from '../store/useCart';
import CustomButton from '../components/button';

const OrderConfirmScreen = ({navigation}) => {
    const cartItems = useCartStore(state => state.cartItems);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);
    const clearCart = useCartStore(state => state.clearCart);

    //clear cart after leaving order confirmation page
    useFocusEffect(
        React.useCallback(() => {
        //when screen is focused, do nothing special
        
        return () => {
            //this function runs when clicking away
            clearCart();
        };
        }, [])
    );

    return (
        <View style={styles.container}>          
            <Text style={styles.header1}>Thank you for your order!</Text>
            <Text style={styles.subtext}>Here's a summary of what you bought:</Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <View style={styles.cartCard}>
                    <View style={styles.itemContainer}>
                    {/* Left Column */}
                    <View style={styles.leftColumn}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>Price: €{item.price}</Text>
                        <Text>Quantity: {item.amount}</Text>
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
                </View>
                )}
            />

            <View style={styles.footer}>
                <Text style={styles.total}>Total Paid: €{totalPrice.toFixed(2)}</Text>
                <CustomButton
                    title="Back to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
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
    subtext: {
        fontSize: 16,
        fontFamily: 'Elza-Text-Medium',
        textAlign: 'center',
        marginBottom: 20,
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
        marginBottom: 5,
        fontFamily: 'Elza-Text-Medium'
    },
    footer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 20,
    },
    total: { 
        fontSize: 18, 
        fontFamily: 'Elza-Text-Medium', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 20
    },
});

export default OrderConfirmScreen;
