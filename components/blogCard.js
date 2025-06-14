//Card to display blog posts in the blog screen

import { StatusBar } from 'expo-status-bar';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({thumbnail, title, date, onPress }) => {
    const addToCart = () => {
        alert('Added to cart');
    };

    return (
        <View style={styles.productCard}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground 
                    source={thumbnail}
                    style={styles.image}
                />
                <View style={styles.cardTextContainer}>
                    <Text style={styles.blogTitle}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    productCard: {
        marginHorizontal: 40,
        marginVertical: 20,
        backgroundColor:'#f8f9f8',
        borderRadius: 4
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 4,
        margin: 24,
        alignSelf: "center",
        objectFit: "contain"
    },
    cardTextContainer:{
        margin: 8,
        backgroundColor: "#fff",
        paddingVertical: 40,
        paddingHorizontal: 24,
    },
    blogTitle:{
        fontSize: 24,
        fontFamily: 'Larken-Bold',
        color: "black",
    },
    date:{
        fontSize: 18,
        fontFamily: 'Elza-Text-Medium',
        color: "black"
    }
});

export default BlogCard;