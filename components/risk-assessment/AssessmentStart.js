import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const AssessmentStart = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={styles.textWrapper}>
          <View style={customStyles.headingWrapper}>
            <CustomText style={customStyles.heading}>
              {route.params.choice}
            </CustomText>
          </View>
          {route.params.choice == 'SUPPORT FOR YOURSELF' ? (
            <CustomText style={customStyles.txt}>
              These questions will help you to identify if you are in abusive
              relationships. Answering yes to one or more of the behaviours
              below is a <Text style={styles.redText}>red flag</Text> that abuse
              may be present in your relationship.
            </CustomText>
          ) : (
            <CustomText style={customStyles.txt}>
              In Jamaica, violence in the home is still treated as ‘family
              secret’. There are however signs that you can look for if you are
              worried about the safety of a family member or friend. These
              questions will help you to identify common signs of abuse.
            </CustomText>
          )}

          <View style={styles.buttonWrapper}>
            {route.params.choice == 'SUPPORT FOR YOURSELF' ? (
              <CustomButton
                onPress={() =>
                  navigation.navigate('Question 1', {
                    choice: route.params.choice,
                  })
                }
              >
                <CustomText style={customStyles.buttonText}>
                  BEGIN ASSESSMENT
                </CustomText>
              </CustomButton>
            ) : (
              <CustomButton
                onPress={() =>
                  navigation.navigate('Assessment Others 1', {
                    choice: route.params.choice,
                  })
                }
              >
                <CustomText style={customStyles.buttonText}>
                  BEGIN ASSESSMENT
                </CustomText>
              </CustomButton>
            )}
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingVertical: 10,
  },
  redText: {
    color: 'red',
    fontSize: 15,
    fontFamily: 'poppins-semibold',
  },
});
