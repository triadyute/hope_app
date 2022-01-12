import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Quiz10 = ({ navigation }) => {
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
            “Cockroach nuh business inna fowl fight”. Couples always fight and
            quarrel and that is their private business.
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
              Abuse is never a private matter. That is a myth! Your friend may
              be in a very vulnerable situation and feel afraid to ask for help.
              Reach out as you may be the confidante your friend needs.
            </CustomText>
          </View>
        )}

        {!showQuestion && mythSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>Correct!</CustomText>
            <CustomText style={customStyles.answer}>
              It is not a good idea to stop supporting a friend/family member if
              you believe they are a victim of abuse.
            </CustomText>
          </View>
        )}

        {!showQuestion && (
          <View style={customStyles.continueButtonWrapper}>
            <CustomButton onPress={() => navigation.navigate('Quiz 11')}>
              <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
            </CustomButton>
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
