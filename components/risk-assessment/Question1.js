import React from 'react';
import { View, ScrollView, Text, Inage, StyleSheet, Image } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Question1 = ({ navigation, route }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            {route.params.choice}
          </CustomText>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/gender.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>My gender is:</CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 2', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>MALE</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 2', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>FEMALE</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 2', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>TRANSGENDER</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 2', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>OTHER</CustomText>
          </CustomButton>
          <CustomButton
            onPress={() =>
              navigation.navigate('Question 2', { choice: route.params.choice })
            }
          >
            <CustomText style={customStyles.buttonText}>
              I DON'T WISH TO DISCLOSE
            </CustomText>
          </CustomButton>
        </View>
      </ScrollView>
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
    height: 90,
    width: 90,
  },
  text: {
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    fontSize: 22,
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
});
