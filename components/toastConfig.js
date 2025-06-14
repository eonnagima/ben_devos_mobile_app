//config file for the toast messages used when adding products to the cart. This makes sure it uses the style of the app instead of the default toast style.

import React from 'react';
import { BaseToast } from 'react-native-toast-message';

const toastConfig = {
  success: ({ text1, props, ...rest }) => (
    <BaseToast
      {...rest}
      style={{ borderLeftColor: '#3FC427', paddingHorizontal: 15, minHeight: 60 }}
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
