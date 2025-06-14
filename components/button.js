import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#272727',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: "#3FC427",
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
