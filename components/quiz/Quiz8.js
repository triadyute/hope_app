import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Quiz8 = ({ navigation }) => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [mythSelected, setMythSelected] = useState(false);
  const [factSelected, setFactSelected] = useState(false);

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            TEST YOUR KNOWLEDGE
          </CustomText>
        </View>

        <View style={customStyles.questionWrapper}>
          <CustomText style={customStyles.question}>
            Men who hit women are usually drunk or smoking ganja.{' '}
          </CustomText>
        </View>

        {showQuestion && (
          <View style={customStyles.quizButtonWrapper}>
            <CustomButton
              onPress={() => {
                setShowQuestion(false);
                setFactSelected(true);
              }}
            >
              <CustomText style={customStyles.buttonText}>FACT</CustomText>
            </CustomButton>
            <CustomButton
              onPress={() => {
                setShowQuestion(false);
                setMythSelected(true);
              }}
            >
              <CustomText style={customStyles.buttonText}>MYTH</CustomText>
            </CustomButton>
          </View>
        )}

        {!showQuestion && factSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>
              This is not true.
            </CustomText>
            <CustomText style={customStyles.answer}>
              Alcohol and/or drugs might make an existing situation worse, but
              they do NOT cause abusive behaviour. Many people use alcohol and
              drugs and are not abusive. Abuse is about the abuser choosing to
              use power through violence against a partner.. Alcohol, drugs are
              no excuses to justify violence. This is a myth.
            </CustomText>
          </View>
        )}

        {!showQuestion && mythSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>Good!</CustomText>
            <CustomText style={customStyles.answer}>
              Many people use alcohol and drugs and are not abusive. Alcohol or
              drugs are not excuses for any form of abuse.
            </CustomText>
          </View>
        )}

        {!showQuestion && (
          <View style={customStyles.continueButtonWrapper}>
            <CustomButton onPress={() => navigation.navigate('Quiz 9')}>
              <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
            </CustomButton>
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
