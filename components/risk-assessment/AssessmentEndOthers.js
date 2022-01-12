import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { AltButton } from '../custom-components/AltButton';

export const AssessmentEndOthers = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={styles.innerWrapper}>
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
          <CustomText style={customStyles.txt}>
            You have completed the assessment. If you answered{' '}
            <Text style={styles.redText}>yes</Text> to one or more of the
            questions, your family member or friend could be in an abusive
            relationship. Your friend or family member has the right to be safe,
            to live a happy, healthy life and to be treated with respect. No one
            deserves to be abused. Let them know they are not alone. Please
            support them to find help through{' '}
            <Text
              style={styles.blueText}
              onPress={() => navigation.navigate('Support Services')}
            >
              Hope Supports
            </Text>
            .
          </CustomText>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <AltButton onPress={() => navigation.navigate('Support Services')}>
            <CustomText style={customStyles.altButtonText}>
              SUPPORT SERVICES
            </CustomText>
          </AltButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
    backgroundColor: '#efefef',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'center',
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
