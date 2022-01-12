import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const OnlineSafety = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/online_safety-01.jpg')}
          />
        </View>
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.heading}>
            <Text>LEAVE APP SAFELY</Text>
          </CustomText>
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={customStyles.txt}>
            You can quickly leave the app by clicking the r
            <Text style={styles.redText}>ed “X”</Text> in the bottom-right
            corner. Be sure to clear your history as soon as possible.
          </CustomText>
          <CustomText style={customStyles.txt}></CustomText>
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
    paddingVertical: 5,
  },
  redText: {
    color: 'red',
    fontFamily: 'poppins-semibold',
    fontSize: 15,
  },
});
