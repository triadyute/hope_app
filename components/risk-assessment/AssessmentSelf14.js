import React from 'react';
import { View, Yext, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const AssessmentSelf14 = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            {route.params.choice}
          </CustomText>
        </View>
        <View style={customStyles.assessmentTextWrapper}>
          <CustomText style={customStyles.assessmentTxt}>
            Has your partner threatened to hurt or kill themselves if you do not
            comply with what they want?
          </CustomText>
        </View>
        <View style={customStyles.assessmentButtonWrapper}>
          <CustomButton
            onPress={() => {
              route.params.answers++;
              navigation.navigate('Assessment Self 15', {
                choice: route.params.choice,
                answers: route.params.answers,
              });
            }}
          >
            <CustomText style={customStyles.buttonText}>YES</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() => {
              navigation.navigate('Assessment Self 15', {
                choice: route.params.choice,
                answers: route.params.answers,
              });
            }}
          >
            <CustomText style={customStyles.buttonText}>NO</CustomText>
          </CustomButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
