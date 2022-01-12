import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { ListItem } from '../custom-components/ListItem';
import { Emergency } from '../custom-components/Emergency';
import Markdown from 'react-native-markdown-text';
import markdownFonts from '../custom-components/markDownFonts';
import apiRoutes from '../../api/routes';

export const KnowYourRights = ({ navigation }) => {
  const [knowYourRights, setKnowYourRights] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadKnowYourRights();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/know-your-rights');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setKnowYourRights(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadKnowYourRights = async () => {
    setLoading(true);
    const response = await apiRoutes.getKnowYourRights;
    setLoading(false);
    response.data != null
      ? setKnowYourRights(response.data.data.attributes.body)
      : retrieveData();
    //setKnowYourRights(response.data.data.attributes.body);
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/know_your_rights-01.jpg')}
          />
        </View>
        <View style={styles.textWrapper}>
          <Markdown styles={markdownFonts}>{knowYourRights}</Markdown>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Emergency />
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
    marginBottom: 5,
  },
});
