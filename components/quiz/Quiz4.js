import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Quiz4 = ({ navigation }) => {
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
            A man has a right to have sex with his step-daughters because he is
            the provider.
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
              It is rape and sexual exploitation. A man has no right to have sex
              with his step-daughters because of his financial support to the
              family. This is a myth!
            </CustomText>
          </View>
        )}

        {!showQuestion && mythSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>Correct.</CustomText>
            <CustomText style={customStyles.answer}>
              Many m en in Jamaica think that being the head of the household
              means that they have the right to have sex with their girl
              children. This is a myth and is used by men to exercise power over
              women and girls.
            </CustomText>
          </View>
        )}

        {!showQuestion && (
          <View style={customStyles.continueButtonWrapper}>
            <CustomButton onPress={() => navigation.navigate('Quiz 5')}>
              <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
            </CustomButton>
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
