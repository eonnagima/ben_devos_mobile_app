import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground} from 'react-native';

const LinkCard = ({image, title, onPress}) => {

return(
    <TouchableOpacity 
        onPress={onPress}
        style={{ width: '100%', marginBottom: 32 }}
    >
        <ImageBackground 
            source={image}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 4}}
        >
            <View style={styles.colorOverlay}>
                <Text style={styles.header2}>{title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    header2: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
      marginTop: 20,
      fontFamily: 'Larken-Bold',
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        alignContent: 'center',
        justifyContent: 'center',
        
    },
    colorOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: 40
    },
});

export default LinkCard;