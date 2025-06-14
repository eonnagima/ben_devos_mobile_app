//Home Screen with navigation links to Products, Blogs, and Looks sections

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ProductCard from '../components/productCard';
import * as Font from 'expo-font';

import LinkCard from '../components/linkCard';

//static images for the home screen
import logoImg from '../assets/images/logo.png';
import shoesImg from '../assets/images/shoes.jpg';
import blogsImg from '../assets/images/blogs.jpg';
import looksImg from '../assets/images/looks.jpg';

const HomeScreen = ({navigation}) => {

return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />

            <Text style={styles.header1}>Demonia Cult</Text>
            <Text style={styles.slogan}>Defining Alternative Footwear</Text>
        </View>
        <View style={styles.container}>
            <LinkCard
                image={shoesImg}
                title="Discover our collection"
                onPress={() => navigation.navigate('Products')}
            />
            <LinkCard
                image={blogsImg}
                title="Read our latest news"
                onPress={() => navigation.navigate('Blogs')}
            />
            <LinkCard
                image={looksImg}
                title="Get inspired by fellow freaks"
                onPress={() => navigation.navigate('Looks')}
            />
        </View>
    </ScrollView>
);
};

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
    logo:{
        width: 200,
        height: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    slogan:{
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Elza-Text-Medium',
    }
});

export default HomeScreen;