import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const SupportServices = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [resourcesContent, setResourcesContent] = useState('');

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/hope_supports-01.jpg')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('How Can I Help')}
          >
            <CustomText style={styles.altButtonText}>
              HOW CAN I HELP SOMEONE AFFECTED BY GBV?
            </CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Safety Planning')}
          >
            <CustomText style={styles.altButtonText}>
              SAFETY PLANNING
            </CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('GBV Resources')}
          >
            <CustomText style={styles.altButtonText}>
              SUPPORT SERVICES
            </CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('National Hotlines')}
          >
            <CustomText style={styles.altButtonText}>
              NATIONAL HOTLINES
            </CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('GBV Human Rights')}
          >
            <CustomText style={styles.altButtonText}>
              GENDER-BASED VIOLENCE AND HUMAN RIGHTS
            </CustomText>
          </Pressable>
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
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: '#C1126B',
    marginVertical: 4,
  },
  altButtonText: {
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    fontSize: 16,
    color: '#C1126B',
  },
});
