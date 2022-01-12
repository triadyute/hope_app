import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Emergency } from '../custom-components/Emergency';
import { Footer } from '../custom-components/Footer';

export const GetSupport = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            <Text>GET SUPPORT</Text>
          </CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Assessment Start', {
                choice: 'SUPPORT FOR YOURSELF',
              });
            }}
          >
            <CustomText style={customStyles.buttonText}>
              <Text>SUPPORT FOR YOURSELF</Text>
            </CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Assessment Start', {
                choice: 'SUPPORT FOR SOMEONE ELSE',
              })
            }
          >
            <CustomText style={customStyles.buttonText}>
              <Text>SUPPORT FOR SOMEONE ELSE</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('Myths About GBV')}>
            <CustomText style={customStyles.buttonText}>
              <Text>GBV MYTHS AND FACTS</Text>
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
