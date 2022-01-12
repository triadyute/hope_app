import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const GBVHumanRights = ({ navigation }) => {
  const [gbvAndHumanRights, setGbvAndHumanRights] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadGbvAndHumanRights();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/gbv-and-human-rights');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setGbvAndHumanRights(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadGbvAndHumanRights = async () => {
    setLoading(true);
    const response = await apiRoutes.getGbvAndHumanRights;
    setLoading(false);

    response.data != null
      ? setGbvAndHumanRights(response.data.data.attributes.body)
      : retrieveData();

    //setGbvAndHumanRights(response.data.data.attributes.body);
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/gbv_and_human_rights-01.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <Markdown styles={markdownFonts}>{gbvAndHumanRights}</Markdown>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={() => navigation.navigate('Know Your Rights')}>
            <CustomText style={customStyles.buttonText}>
              DO YOU KNOW YOUR RIGHTS?
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('Know Our Laws')}>
            <CustomText style={customStyles.buttonText}>
              DO YOU KNOW OUR LAWS?
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('Sexual Consent')}>
            <CustomText style={customStyles.buttonText}>
              SEXUAL CONSENT
            </CustomText>
          </CustomButton>
        </View>
      </ScrollView>
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
    paddingVertical: 10,
  },
});
