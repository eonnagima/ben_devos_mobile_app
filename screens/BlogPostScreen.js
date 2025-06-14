import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, Touchable, useWindowDimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ProductCard from '../components/productCard';
import * as Font from 'expo-font';
import RenderHTML from 'react-native-render-html';

const BlogPostScreen = ({route}) => {
    const blog = route.params;
    const {width} = useWindowDimensions();

return (
    <ScrollView style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.date}>{blog.date}</Text>
            <Image
                source={blog.thumbnail}
                style={styles.image}
            />
            <Text style={styles.header1}>{blog.title}</Text>
        </View>
        <View style={styles.container}>
            <RenderHTML
                contentWidth={width}
                source={{ html: blog.intro }}
                baseStyle={{
                    fontFamily: 'Elza-Text-bold',
                    color: 'black',
                    textAlign: 'left',
                }}
            />
            <RenderHTML
                contentWidth={width}
                source={{ html: blog.body }}
                baseStyle={{
                    fontFamily: 'Elza-Text-medium',
                    color: 'black',
                    textAlign: 'left',
                }}
            />
        </View>
        <View style={styles.container}>

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
      textAlign: 'left',
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
    date:{
        fontSize: 18,
        fontFamily: 'Elza-Text-Medium',
        color: "black",
        textAlign: 'left',
    }
});

export default BlogPostScreen;