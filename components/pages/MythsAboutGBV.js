import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Moal,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { AltButton } from '../custom-components/AltButton';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const MythsAboutGBV = ({ navigation }) => {
  const [mythsAboutGbv, setMythsAboutGbv] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMythsAboutGbv();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/myths-about-gbv');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setMythsAboutGbv(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const loadMythsAboutGbv = async () => {
    setLoading(true);
    const response = await apiRoutes.getMythsAboutGbv;
    setLoading(false);

    response.data != null
      ? setMythsAboutGbv(response.data.data.attributes.body)
      : retrieveData();
    //setMythsAboutGbv(response.data.data.attributes.body);
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/myths_about_gbv-01.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <Markdown styles={markdownFonts}>{mythsAboutGbv}</Markdown>
        </View>
        <View style={styles.buttonWrapper}>
          <AltButton onPress={() => navigation.navigate('Quiz Start')}>
            <CustomText style={customStyles.altButtonText}>
              <Text>TEST YOUR KNOWLEDGE</Text>
            </CustomText>
          </AltButton>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageWrapper: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 140,
  },
  textWrapper: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
});
