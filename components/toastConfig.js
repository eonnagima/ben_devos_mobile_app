import React from 'react';
import { BaseToast } from 'react-native-toast-message';

const toastConfig = {
  success: ({ text1, props, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: 'green', paddingHorizontal: 15, minHeight: 60 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ 
        fontSize: 18, 
        fontFamily: 'Elza-Text-Medium',   // your custom font name
        color: '#111',
      }}
      text1={text1}
      text2={props?.text2}
    />
  ),
  // add other toast types if you want...
};

export default toastConfig;
