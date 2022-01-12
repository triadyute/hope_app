import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const NoSelected = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.heading}>
            END OF ASSESSMENT
          </CustomText>
        </View>
        <View style={styles.textWrapper}>
          {route.params.choice == 'SUPPORT FOR YOURSELF' ? (
            <CustomText style={customStyles.txt}>
              Based on your responses, you do not appear to be affected by
              gender-based violence. However, if you believe that you are, feel
              free to use the resources on the site to get support. You may also
              call the police or one of the emergency hotlines listed.
            </CustomText>
          ) : (
            <CustomText>
              Based on your responses, your friend or family member does not
              appear to be affected by gender-based violence. However, if you
              believe that they are, feel free to advise them of the resources
              on the site so that they may get support.
            </CustomText>
          )}
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
