import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  Image,
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { ListItem } from '../custom-components/ListItem';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const WhatIsGBV = ({ navigation }) => {
  const [formsOfGbvContent, setFormsOfGbvContent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    lloadFormsOfGbv();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/forms-of-gbvs');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setFormsOfGbvContent(test.value.data);
        //console.log(test.value.data);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const lloadFormsOfGbv = async () => {
    setLoading(true);
    const response = await apiRoutes.getFormsOfGbv;
    setLoading(false);
    response.data != null
      ? setFormsOfGbvContent(response.data.data)
      : retrieveData();
    //setFormsOfGbvContent(response.data.data);
    // console.log(safetyPlanningContent);
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/what_is_gbv-01.jpg')}
          />
        </View>
        <ActivityIndicator animating={loading} />
        {formsOfGbvContent.map((item) => (
          <View key={item.id} style={customStyles.textWrapper}>
            <CustomText style={customStyles.heading}>
              {item.attributes.title}
            </CustomText>
            <Markdown styles={markdownFonts}>{item.attributes.body}</Markdown>
          </View>
        ))}

        <View style={styles.textWrapper}>
          <CustomText style={customStyles.txt}>
            You can go to Resources for further information on GBV.
          </CustomText>
        </View>
        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
          <Emergency />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
    paddingTop: 5,
  },
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  buttonWrapper: {
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderColor: '#C1126B',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTxt: {
    fontSize: 15,
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    color: '#C1126B',
  },
});
