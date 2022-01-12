import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';

export const AssessmentEnd = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            {route.params.choice}
          </CustomText>
        </View>
        {/* <View style={styles.textWrapper}>
          <CustomText style={styles.answerText}>
            You answered <Text style={styles.redText}>YES</Text> to{' '}
            <Text style={styles.redText}>{route.params.answers}</Text> questions
          </CustomText>
        </View> */}
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>
            Based on your answers, you may be in an abusive relationship. Reach
            out to the services listed in HOPE Supports to get help and to
            decide your next steps. If you feel your situation is desperate and
            getting worse, you should{' '}
            <Text style={styles.redText}>call 119</Text> now or a
            counsellor/social worker in one of the agencies in HOPE Supports.
          </CustomText>
        </View>
        <View style={styles.lowerTextWrapper}>
          <CustomText style={styles.lowerText}>
            <Text style={styles.redText}>Remember:</Text> f you are being abused
            by your partner, it is not your fault. You are not the cause of
            another person’s violent behaviour. You have the right to be safe.
            You have the right to live a happy, healthy life. You deserve
            respect. No one deserves to be abused. You are not alone; help is
            just a click away at{' '}
            <Text
              onPress={() => navigation.navigate('Support Services')}
              style={styles.blueText}
            >
              HOPE Supports
            </Text>
            .
          </CustomText>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          {/* <CustomButton onPress={() => navigation.navigate('Support Services')}>
            <CustomText style={customStyles.buttonText}>
              SUPPORT SERVICES
            </CustomText>
          </CustomButton> */}
          <Emergency />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'poppins',
    textAlign: 'justify',
    color: '#222222',
  },
  lowerTextWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#efefef',
    marginBottom: 10,
  },
  lowerText: {
    fontSize: 15,
    fontFamily: 'poppins',
    textAlign: 'justify',
  },
  answerText: {
    fontFamily: 'bebas-neue',
    fontSize: 26,
    textAlign: 'center',
    color: 'grey',
    textTransform: 'uppercase',
  },
  redText: {
    color: 'red',
    fontFamily: 'poppins-semibold',
  },
  blueText: {
    color: 'blue',
  },
});
