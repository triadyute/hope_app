import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Inage,
  StyleSheet,
  Image,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export const Question4 = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    'bebas-neue': require('../../assets/fonts/BebasNeuePro-Reg.ttf'),
    'bebas-neue-book': require('../../assets/fonts/BebasNeuePro-Book.ttf'),
    'bebas-neue-bold': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
    'poppins-semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
            <Text>How many?</Text>
          </CustomText>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='1'
            style={styles.textInput}
            keyboardType='number-pad'
            maxLength={2}
          />
        </View>
        <View style={styles.buttonWrapper}>
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
            <CustomText style={customStyles.buttonText}>CONTINUE</CustomText>
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
  inputWrapper: {
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  buttonWrapper: {
    paddingHorizontal: 40,
  },
  textInput: {
    backgroundColor: '#efefef',
    padding: 10,
    textAlign: 'center',
    fontFamily: 'poppins-semibold',
    fontSize: 20,
  },
});
