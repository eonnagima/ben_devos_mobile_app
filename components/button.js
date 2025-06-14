//custom button with default styles. Mainly adds an active state for user feedback

import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, mainColor = "#272727", activeColor = "#3FC427", textColor = '#fff', fullWidth = false }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? activeColor : mainColor },
        fullWidth && { width: '100%' }
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Elza-Text-Medium',
  },
});

export default CustomButton;
