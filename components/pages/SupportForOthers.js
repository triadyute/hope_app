import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';

export const SupportForOthers = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            <Text>SUPPORT FOR SOMEONE ELSE</Text>
          </CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 1', {
                choice: 'SUPPORT FOR SOMEONE ELSE',
              })
            }
          >
            <CustomText style={customStyles.buttonText}>
              <Text>RISK ASSESSMENT</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('Support Services')}>
            <CustomText style={customStyles.buttonText}>
              <Text>SUPPORT SERVICES</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('How Can I Help')}>
            <CustomText style={customStyles.buttonText}>
              <Text>HOW CAN I HELP?</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('GBV Resources')}>
            <CustomText style={customStyles.buttonText}>
              <Text>RESOURCES TO ADDRESS GBV</Text>
            </CustomText>
          </CustomButton>
          <Emergency />
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
});
