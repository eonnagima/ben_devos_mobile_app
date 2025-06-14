import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import BlogCard from '../components/blogCard';
import * as Font from 'expo-font';
import {format} from 'date-fns';
import{ DEMONIA_WEBFLOW_API_KEY} from '@env';

const BlogsScreen = ({navigation}) => {
    const [blogs, setBlogs] = useState([]);

    const formatDate = (isoString) => {
        return format(new Date(isoString), 'EEE dd MMMM yyyy');
    }

    useEffect(() => {
        fetch(
            'https://api.webflow.com/v2/sites/67ab9628a0b2d39659eb5d0f/collections/67bcc196a990af2400ff7601/items',
            {
                headers:{
                    Authorization:
                        `Bearer ${DEMONIA_WEBFLOW_API_KEY}`,
                },
            }
        )
            .then((res) => res.json()) //res = response
            .then((data) => {
                setBlogs(
                    data.items.map((item) => ({
                        id: item.id,
                        title: item.fieldData.name,
                        date: formatDate(item.fieldData["publish-date"]),
                        intro: item.fieldData.intro,
                        body: item.fieldData.body,
                        thumbnail: {uri: item.fieldData.thumbnail?.url} 
                    }))
                )
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
            <Text style={styles.header1}>Blog Posts</Text>
            </View>
            <View>
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        thumbnail={blog.thumbnail}
                        title={blog.title}
                        date={blog.date}
                        onPress={() => navigation.navigate('BlogPost', blog)}
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

export default BlogsScreen;