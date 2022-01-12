import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const SexualConsent = ({ navigation }) => {
  const [sexualConsent, setSexualConsent] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadSexualConsent();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/sexual-consent');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setSexualConsent(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadSexualConsent = async () => {
    setLoading(true);
    const response = await apiRoutes.getSexualConsent;
    setLoading(false);
    response.data != null
      ? setSexualConsent(response.data.data.attributes.body)
      : retrieveData();
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/sexual_consent-01.jpg')}
          />
        </View>
        <View style={styles.textWrapper}>
          <Markdown styles={markdownFonts}>{sexualConsent}</Markdown>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={() => navigation.navigate('Cases')}>
            <CustomText style={customStyles.buttonText}>CASES</CustomText>
          </CustomButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  textWrapper: {
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  boldText: {
    color: '#C1126B',
    fontFamily: 'poppins-semibold',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'justify',
  },
});
