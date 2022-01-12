import React from 'react';
import { View, Yext, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const AssessmentSelf1 = ({ navigation, route }) => {
  let answers = 0;

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
          <CustomText style={customStyles.assessmentQuestion}>
            Has your partner, relative or other close person you know…
          </CustomText>
          <CustomText style={customStyles.assessmentTxt}>
            Become very jealous of your friends or of the time you spend with
            other people?
          </CustomText>
        </View>
        <View style={customStyles.assessmentButtonWrapper}>
          <CustomButton
            onPress={() => {
              answers++;
              navigation.navigate('Assessment Self 2', {
                choice: route.params.choice,
                answers: answers,
              });
            }}
          >
            <CustomText style={customStyles.buttonText}>YES</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Assessment Self 2', {
                choice: route.params.choice,
                answers: answers,
              })
            }
          >
            <CustomText style={customStyles.buttonText}>NO</CustomText>
          </CustomButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
