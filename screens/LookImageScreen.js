// Very simple fullscreen view of the image in the looks screen
import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const LookImageScreen = ({ route, navigation }) => {
  const { image } = route.params;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Image source={image} style={styles.fullscreenImage} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default LookImageScreen;
