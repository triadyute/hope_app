import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Quiz5 = ({ navigation }) => {
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
            If she was not misbehaving, he would never have to hit her.
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
              There are no excuses for any form of abuse. Abusers use violence
              to control and intimidate others The person being abused is not
              responsible and and it is never their fault. Only the abuser is
              responsible for the abuse. This is a myth.
            </CustomText>
          </View>
        )}

        {!showQuestion && mythSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>
              You are correct!
            </CustomText>
            <CustomText style={customStyles.answer}>
              The person being abused is never to be blamed for what they are
              going through. The use of violence in a relationship or any form
              of abuse is never justified.
            </CustomText>
          </View>
        )}

        {!showQuestion && (
          <View style={customStyles.continueButtonWrapper}>
            <CustomButton onPress={() => navigation.navigate('Quiz 6')}>
              <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
            </CustomButton>
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
