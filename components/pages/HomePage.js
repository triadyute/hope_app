import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Linking,
  ActivityIndicator,
  StyleSheet,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Emergency } from '../custom-components/Emergency';
import apiRoutes from '../../api/routes';

export const HomePage = ({ navigation }) => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadHome();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/home');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setHome(test.value.data.attributes.body);
        //console.log(test.value.data.attributes.body);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const loadHome = async () => {
    setLoading(true);
    const response = await apiRoutes.getHome;
    setLoading(false);
    response.data != null
      ? setHome(response.data.data.attributes.body)
      : retrieveData();
    //setHome(response.data.data.attributes.body);
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/hope_logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={customStyles.headingWrapper}>
          <CustomText style={styles.heading}>
            <Text>
              HELPING OUR PEOPLE EMERGE (HOPE) from Sexual and Gender-based
              Violence
            </Text>
          </CustomText>
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={customStyles.txt}>{home}</CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={() => navigation.navigate('Welcome')}>
            <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() => {
              BackHandler.exitApp();
              Linking.openURL('https://www.jamaica-gleaner.com');
            }}
          >
            <CustomText style={customStyles.buttonText}>EXIT APP</CustomText>
          </CustomButton>
          <Emergency />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginTop: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 6,
  },
  logo: {
    height: 200,
    width: 220,
  },
  heading: {
    fontFamily: 'bebas-neue',
    color: 'grey',
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textWrapper: {
    paddingHorizontal: 30,
    flex: 4,
  },
  buttonWrapper: {
    flex: 3,
    marginTop: 15,
    paddingHorizontal: 30,
  },
});
