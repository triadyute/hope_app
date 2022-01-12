import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  Linking,
  Pressable,
  BackHandler,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { AltButton } from '../custom-components/AltButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const SplashScreen = (props) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [safeToContinue, setSafeToContinue] = useState(true);
  const getStarted = () => {
    props.navigation.navigate('Home Page');
  };
  return (
    <View style={customStyles.mainWrapper}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalWrapper}>
          <View style={styles.dangerWrapper}>
            <Image
              source={require('../../assets/images/danger.png')}
              style={styles.dangerIcon}
            />
          </View>
          <View style={customStyles.headingWrapper}>
            <CustomText style={styles.heading}>
              <Text>SECURITY ALERT!!!</Text>
            </CustomText>
          </View>
          <View style={styles.textWrapper}>
            <CustomText style={customStyles.txt}>
              If you are worried your app usage is being monitored, log out at
              once. Click the <Text style={styles.redText}>red “X”</Text> in the
              upper-right corner of the phone to leave quickly.
            </CustomText>
            <View style={customStyles.modalFooterWrapper}>
              {!safeToContinue ? (
                <CustomButton onPress={() => setModalOpen(false)}>
                  <Text style={customStyles.buttonText}>CONTINUE</Text>
                </CustomButton>
              ) : (
                <AltButton onPress={() => setSafeToContinue(false)}>
                  <Text style={customStyles.altButtonText}>
                    SAFE TO CONTINUE
                  </Text>
                </AltButton>
              )}
            </View>
          </View>
        </View>
        <Pressable
          style={customStyles.modalFooter}
          onPress={() => {
            Linking.openURL('https://www.jamaica-gleaner.com');
            BackHandler.exitApp();
          }}
        >
          <CustomText style={customStyles.modalFooterTxt}>
            <MaterialCommunityIcons name='close-thick' size={18} /> EXIT APP
          </CustomText>
        </Pressable>
      </Modal>
      <View style={customStyles.innerWrapper}>
        <View style={styles.topImageWrapper}>
          <Image
            source={require('../../assets/images/spotlight_logo.png')}
            style={styles.spotlightLogo}
          />
          <Image
            source={require('../../assets/images/eve_logo.png')}
            style={styles.eveLogo}
          />
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/hope_logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={getStarted}>
            <CustomText>
              <Text style={customStyles.buttonText}>GET STARTED</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => BackHandler.exitApp()}>
            <CustomText>
              <Text style={customStyles.buttonText}>EXIT APP</Text>
            </CustomText>
          </CustomButton>
          <CustomText style={styles.footerText}>
            <Text>&copy;2021 Spotlight Initiative. All rights reserved.</Text>
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topImageWrapper: {
    flex: 2,
    flexDirection: 'row',
    paddingVertical: 30,
    borderStartWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  eveLogo: {
    height: 85,
    width: 80,
  },
  spotlightLogo: {
    height: 85,
    width: 200,
  },
  imageWrapper: {
    flex: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 290,
  },
  textWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  redText: {
    color: 'red',
    fontFamily: 'poppins-semibold',
    fontSize: 15,
  },
  heading: {
    fontSize: 26,
    fontFamily: 'bebas-neue',
    color: 'red',
  },
  buttonWrapper: {
    flex: 3,
    paddingHorizontal: 30,
  },
  footerText: {
    textAlign: 'center',
    color: '#C1126B',
    fontFamily: 'poppins',
    marginTop: 15,
    fontSize: 13,
  },
  dangerWrapper: {
    marginBottom: 30,
  },
  dangerIcon: {
    height: 70,
    width: 70,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    height: 65,
    paddingHorizontal: 30,
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
