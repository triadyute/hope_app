import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export const Question2 = ({ navigation, route }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectAgeGroup, setSelectAgeGroup] = useState(false);
  const [ageGroup, setAgeGroup] = useState('Less than 18 years');
  const [underaged, setUnderaged] = useState(false);
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
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            {route.params.choice}
          </CustomText>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/age_group.png')}
            style={styles.image}
          />
        </View>

        <Modal transparent={true} visible={selectAgeGroup}>
          <View style={styles.overlay}>
            <View style={styles.body}>
              <View style={customStyles.modalHeadingWrapper}>
                <CustomText style={styles.listHeading}>
                  Select age group
                </CustomText>
              </View>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setAgeGroup('Less than 18 years');
                  setSelectAgeGroup(false);
                  setUnderaged(true);
                }}
              >
                <CustomText style={styles.txt}>Less than 18 years</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setAgeGroup('Over 18');
                  setSelectAgeGroup(false);
                }}
              >
                <CustomText style={styles.txt}>Over 18</CustomText>
              </Pressable>
              <Pressable
                style={customStyles.modalHeadingWrapper}
                onPress={() => setSelectAgeGroup(false)}
              >
                <CustomText style={styles.listHeading}>Cancel</CustomText>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} visible={underaged}>
          <View style={styles.overlay}>
            <View style={styles.body}>
              {/* <View style={customStyles.modalHeadingWrapper}>
                <CustomText style={styles.listHeading}>
                  <Text style={{ color: 'red' }}>Invalid age group</Text>
                </CustomText>
              </View> */}
              <View style={styles.modalTextWrapper}>
                <CustomText style={styles.modalText}>
                  The HOPE App is a tool intended for use by persons 18 years
                  and older. Please ask your parent or guardian for assistance
                  in completing the risk assessment
                </CustomText>
              </View>
              <Pressable
                style={styles.modalFooterWrapper}
                onPress={() => setUnderaged(false)}
              >
                <CustomText style={styles.listHeading}>Close</CustomText>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>Select your age group</CustomText>
        </View>
        <View style={styles.dropdownWrapper}>
          <Pressable onPress={() => setSelectAgeGroup(true)}>
            <CustomText>{ageGroup}</CustomText>
          </Pressable>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton
            onPress={() => {
              ageGroup != 'Less than 18 years'
                ? navigation.navigate('Question 3', {
                    choice: route.params.choice,
                  })
                : setUnderaged(true);
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
    paddingTop: 30,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 110,
  },
  text: {
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    fontSize: 22,
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'poppins',
    color: '#C1126B',
    textAlign: 'justify',
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  modalTextWrapper: {
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  dropdownWrapper: {
    marginHorizontal: 50,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#efefef',
  },
  buttonWrapper: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  body: {
    backgroundColor: '#ffffff',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectOption: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#efefef',
    width: '100%',
  },
  txt: {
    fontFamily: 'poppins-semibold',
    fontSize: 16,
    textAlign: 'center',
    color: '#888888',
  },
  listHeading: {
    fontFamily: 'poppins-semibold',
    fontSize: 17,
  },
  modalFooterWrapper: {
    paddingVertical: 15,
  },
});
