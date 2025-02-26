import { StatusBar } from 'expo-status-bar';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({imageSource, productName, productPrice}) => {
    const navigation = useNavigation();
    
    const goToDetails = () => {
        navigation.navigate('Details',{
            imageSource: imageSource,
            productName: productName,
            productPrice: productPrice,
        })
    };

    const addToCart = () => {
        alert('Added to cart');
    };

    return (
        <View style={styles.productCard}>
            <TouchableOpacity onPress={goToDetails}>
                <Image
                    source={imageSource}
                    style={styles.image}
                />
                <View style={styles.cardTextContainer}>
                    <Text style={styles.productName}>{productName}</Text>
                    <Text style={styles.productPrice}>€{productPrice}</Text>
                </View>
            </TouchableOpacity>
            <Button
                title="Add to cart"
                color="#000"
                onPress={addToCart}
            />
        </View>
    );
};

//prop(erty) vs parameters

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
    productName:{
        fontSize: 24,
        fontFamily: 'Larken-Bold',
        color: "black",
    },
    productPrice:{
        fontSize: 18,
        fontFamily: 'Elza-Text-Medium',
        color: "black"
    }
});

export default ProductCard;