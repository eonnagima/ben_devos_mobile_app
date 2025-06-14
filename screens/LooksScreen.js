import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import * as Font from 'expo-font';
import LookCard from '../components/lookCard';
import{DEMONIA_WEBFLOW_API_KEY} from '@env';

const LooksScreen = ({navigation}) => {
    const [looks, setLooks] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.webflow.com/v2/sites/67ab9628a0b2d39659eb5d0f/collections/684d624f3fdebb082dfc28d5/items',
            {
                headers:{
                    Authorization:
                        `Bearer ${DEMONIA_WEBFLOW_API_KEY}`,
                },
            }
        )
            .then((res) => res.json()) //res = response
            .then((data) => {
                setLooks(
                    data.items.map((item) => ({
                        id: item.id,
                        title: item.fieldData.name,
                        date: item.createdOn,
                        image: {uri: item.fieldData['style-image']?.url} 
                    }))
                )
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.header1}>Looks</Text>
            </View>
            <View style={styles.columnsWrap}>
                <View style={styles.column}>
                {looks.filter((_, index) => index % 2 === 0).map((look) => (
                    <LookCard
                        title={look.title}
                        image={look.image}
                        onPress={() => navigation.navigate('LookImage', look)}
                    />
                ))}
                </View>
                <View style={styles.column}>
                {looks.filter((_, index) => index % 2 !== 0).map((look) => (
                    <LookCard
                        title={look.title}
                        image={look.image}
                        onPress={() => navigation.navigate('LookImage', look)}
                    />
                ))}
                </View>
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
    columnsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: '100%',
    },
    column: {
        width: '48%',
    }

});

export default LooksScreen;