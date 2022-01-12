import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const QuizEnd = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.heading}>
            <Text>TEST YOUR KNOWLEDGE</Text>
          </CustomText>
        </View>
        <View style={customStyles.textWrapper}>
          <CustomText style={customStyles.txt}>
            Remember, it is your duty not to spread false information. . Myths
            and misconceptions make people unwilling to help survivors. Many
            survivors want someone to offer them support and information HOPE
            Supports.
          </CustomText>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
