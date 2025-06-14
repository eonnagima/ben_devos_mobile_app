import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground} from 'react-native';

const LookCard = ({image, title, onPress}) => {

return(
    <TouchableOpacity
        style={styles.looksWrap}
        onPress={onPress}
    >
        <View style={{borderRadius:4, overflow: 'hidden'}}>
            <Image 
                source={image}
                style={styles.looksImage}
            />
        </View>
        <Text style={styles.looksTitle}>
            {title}
        </Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    looksWrap:{
        width: '100%',
        marginBottom: 32,
    },
    looksImage: {
        width: '100%',
        aspectRatio: 4/5, // this maintains the aspect ratio of the image
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    looksTitle: {
        fontSize: 24,
        fontFamily: 'Larken-Medium',
        color: "black",
        textAlign: 'left',    
        marginTop: 4
    }
});

export default LookCard;