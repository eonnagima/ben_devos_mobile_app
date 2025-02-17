import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import ProductCard from './components/productCard';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
      async function loadFonts() {
          await Font.loadAsync({
              'Larken-Thin': require('./assets/fonts/larkenThin.otf'),
              'Larken-Light': require('./assets/fonts/larkenLight.otf'),
              'Larken-Regular': require('./assets/fonts/larkenRegular.otf'),
              'Larken-Medium': require('./assets/fonts/larkenMedium.otf'),
              'Larken-Bold': require('./assets/fonts/larkenBold.otf'),
              'Larken-ExtraBold': require('./assets/fonts/larkenExtrabold.otf'),
              'Elza-Text-Medium': require('./assets/fonts/elzaTextMedium.otf')
          });
          setFontsLoaded(true);
      }

      loadFonts();
  }, []);

  if (!fontsLoaded) {
      return <Text>Loading Fonts...</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header1}>All Boots</Text>
      </View>
      <ProductCard 
        imageSource={require('./images/shoes/blaze-158-bvl_960x960_crop_center.webp')}
        productName="Blaze 158"
        productPrice="170.00"
      />
      <ProductCard 
        imageSource={require('./images/shoes/boxer-13-bvl_960x960_crop_center.webp')}
        productName="Boxer 13"
        productPrice="150.00"
      />
      <ProductCard 
        imageSource={require('./images/shoes/shaker-70-bvl_960x960_crop_center.webp')}
        productName="Shaker 70"
        productPrice="155.00"
      />
      <ProductCard 
        imageSource={require('./images/shoes/camel-311-bsue_d514108e-f2ef-4e4b-8daa-44ac2fd9b95e_960x960_crop_center.webp')}
        productName="Camel 311"
        productPrice="160.00"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  header1: {
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Larken-ExtraBold',
    textTransform: 'uppercase'
  }
});