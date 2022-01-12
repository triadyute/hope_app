import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import customStyles from '../styles/Styles';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';
import apiRoutes from '../../api/routes';

export const Welcome = ({ navigation }) => {
  const [welcome, setWelcome] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadWelcome();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/welcome');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setWelcome(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadWelcome = async () => {
    setLoading(true);
    const response = await apiRoutes.getWelcome;
    setLoading(false);
    response.data != null
      ? setWelcome(response.data.data.attributes.body)
      : retrieveData();
    //setWelcome(response.data.data.attributes.body);
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/hope_logo_2.png')}
            style={styles.image}
          />
        </View>
        <ActivityIndicator animating={loading} size='large' color={'#ff0000'} />
        <View style={styles.pageHeaderWrapper}>
          <CustomText style={styles.pageHeader}>
            <Text>WELCOME TO HOPE</Text>
          </CustomText>
        </View>
        <View style={customStyles.textWrapper}>
          <CustomText style={customStyles.txt}>{welcome}</CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() => navigation.navigate('Support Categories')}
          >
            <CustomText style={customStyles.buttonText}>GET SUPPORT</CustomText>
          </CustomButton>
          <Emergency />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  pageHeaderWrapper: {
    paddingHorizontal: 30,
  },
  pageHeader: {
    color: '#C1126B',
    fontFamily: 'bebas-neue-bold',
    fontSize: 40,
    textAlign: 'center',
  },
  imageWrapper: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  image: {
    height: 88,
    width: 220,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
  },
});
