import React from 'react';
import { View, Yext, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const AssessmentOthers7 = ({ navigation, route }) => {
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
            Has your friend or family member ever mentioned that their partner
            has sudden and unpredictable mood swings?
          </CustomText>
        </View>
        <View style={customStyles.assessmentButtonWrapper}>
          <CustomButton
            onPress={() => {
              route.params.answers++;
              navigation.navigate('Assessment Others 8', {
                choice: route.params.choice,
                answers: route.params.answers,
              });
            }}
          >
            <CustomText style={customStyles.buttonText}>YES</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() => {
              navigation.navigate('Assessment Others 8', {
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
