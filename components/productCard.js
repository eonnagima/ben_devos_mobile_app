import { StatusBar } from 'expo-status-bar';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';

const ProductCard = ({imageSource, productName, productPrice}) => {
    return (
        <View style={styles.productCard}>
            <Image
                source={imageSource}
                style={styles.image}
            />
            <View style={styles.cardTextContainer}>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.productPrice}>€{productPrice}</Text>
            </View>
            <Button
                title="Add to Cart"
                color="#000"
                onPress={() => alert('Added to Cart!')}
            />
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