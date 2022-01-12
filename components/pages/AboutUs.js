import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const AboutUs = ({ navigation }) => {
  const netInfo = useNetInfo();
  const [aboutUs, setAboutUs] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadAboutUs();
  }, []);
  // cache/about-us

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/about-us');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setAboutUs(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadAboutUs = async () => {
    setLoading(true);
    const response = await apiRoutes.getAboutUs;
    setLoading(false);
    response.data != null
      ? setAboutUs(response.data.data.attributes.body)
      : retrieveData();
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/about_us-01.jpg')}
            style={styles.image}
          />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Markdown styles={markdownFonts}>{aboutUs}</Markdown>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
  },
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  txt: {
    fontFamily: 'poppins-light-italic',
    fontSize: 15,
    color: '#000000',
  },
  redText: {
    fontFamily: 'poppins-semibold',
    fontSize: 15,
    color: '#ff0000',
  },
});
