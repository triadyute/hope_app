import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Markdown from 'react-native-markdown-text';

const CustomText = (props) => {
  let [fontsLoaded] = useFonts({
    'bebas-neue': require('../../assets/fonts/BebasNeuePro-Reg.ttf'),
    'bebas-neue-book': require('../../assets/fonts/BebasNeuePro-Book.ttf'),
    'bebas-neue-bold': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
    'poppins-light-italic': require('../../assets/fonts/Poppins-LightItalic.ttf'),
    'poppins-semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Text style={props.style}>{props.children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({});
