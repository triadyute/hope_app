import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Quiz11 = ({ navigation }) => {
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
            Once children are involved, a woman should remain with the father
            and put up with the abuse for the children’s sake.
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
              This is a major misconception in Jamaica. A woman who wants to
              leave a violent relationship can do so even if she has children.
              The law will make sure that the father provides for his children
              even after their mother leaves him. Additionally, children who
              have to liv e in a violent home can suffer serious emotional
              trauma from being exposed to this violence.
            </CustomText>
          </View>
        )}

        {!showQuestion && mythSelected && (
          <View>
            <CustomText style={customStyles.answerHeading}>
              You are correct!
            </CustomText>
            <CustomText style={customStyles.answer}>
              Having children does not prevent a woman from leaving the abusive
              father of her children. There law can make sure that the father
              maintains his children even after their mother leaves him.
              Additionally, children who have to live in a violent home can be
              badly affected by their exposure to this violence. .
            </CustomText>
          </View>
        )}

        {!showQuestion && (
          <View style={customStyles.continueButtonWrapper}>
            <CustomButton onPress={() => navigation.navigate('Quiz End')}>
              <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
            </CustomButton>
          </View>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
