import React from 'react';
import { View, ScrollView, Text, Inage, StyleSheet, Image } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Question3 = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            <Text>{route.params.choice}</Text>
          </CustomText>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/children.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>
            <Text>Do you have children who are under 18 years old?</Text>
          </CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 4', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>YES</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() => {
              route.params.choice == 'SUPPORT FOR YOURSELF'
                ? navigation.navigate('Assessment Self 1', {
                    choice: route.params.choice,
                  })
                : navigation.navigate('Assessment Others 1', {
                    choice: route.params.choice,
                  });
            }}
          >
            <CustomText style={customStyles.buttonText}>NO</CustomText>
          </CustomButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageWrapper: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 110,
    width: 90,
  },
  text: {
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    fontSize: 22,
    color: '#0d0d0d',
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
});
