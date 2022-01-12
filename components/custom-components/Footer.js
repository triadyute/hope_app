import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  Linking,
  Pressable,
  BackHandler,
  NativeModules,
  StyleSheet,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from './CustomText';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Footer = ({ navigation }) => {
  const [emergencyModal, setEmergenvyModal] = useState(false);

  return (
    <View style={customStyles.footerWrapper}>
      <Modal visible={emergencyModal} animationType='slide'>
        <View style={styles.modalWrapper}>
          <ScrollView style={{ paddingTop: 20 }}>
            <View style={styles.modalTopWrapper}>
              <CustomText style={customStyles.boldHeading}>
                EMERGENCY HOTLINES
              </CustomText>
            </View>
            <View style={styles.card}>
              <View style={customStyles.textWrapper}>
                <View style={styles.modalHeadingWrapper}>
                  <CustomText style={customStyles.boldTxt}>
                    Bureau of Gender Affairs:
                  </CustomText>
                </View>
                <View style={styles.contactWrapper}>
                  <View style={styles.contactText}>
                    <CustomText style={styles.txt}>
                      +876-553-0387 (M)
                    </CustomText>
                  </View>
                  <View style={styles.contactButtonWrapper}>
                    <Pressable
                      style={styles.callButton}
                      onPress={() => Linking.openURL('tel:${8765530387}')}
                    >
                      <MaterialCommunityIcons
                        name='phone'
                        size={12}
                        color='#C1126B'
                      />
                      <CustomText style={styles.buttonText}> CALL</CustomText>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.contactWrapper}>
                  <View style={styles.contactText}>
                    <CustomText style={styles.txt}>
                      +876-553-0372 (F)
                    </CustomText>
                  </View>
                  <View style={styles.contactButtonWrapper}>
                    <Pressable
                      style={styles.callButton}
                      onPress={() => Linking.openURL('tel:${8765530372}')}
                    >
                      <MaterialCommunityIcons
                        name='phone'
                        size={12}
                        color='#C1126B'
                      />
                      <CustomText style={styles.buttonText}> CALL</CustomText>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={customStyles.textWrapper}>
                <View style={styles.modalHeadingWrapper}>
                  <CustomText style={customStyles.boldTxt}>
                    Child Protection & Family Services Agency (CPFSA):
                  </CustomText>
                </View>
                <View style={styles.contactWrapper}>
                  <View style={styles.contactText}>
                    <CustomText style={styles.txt}>+888-776-8328</CustomText>
                  </View>
                  <View style={styles.contactButtonWrapper}>
                    <Pressable
                      style={styles.callButton}
                      onPress={() => Linking.openURL('tel:${8887768328}')}
                    >
                      <MaterialCommunityIcons
                        name='phone'
                        size={12}
                        color='#C1126B'
                      />
                      <CustomText style={styles.buttonText}> CALL</CustomText>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={customStyles.textWrapper}>
                <View style={styles.modalHeadingWrapper}>
                  <CustomText style={customStyles.boldTxt}>
                    Woman Inc.
                  </CustomText>
                </View>
                <View style={styles.contactWrapper}>
                  <View style={styles.contactText}>
                    <CustomText style={styles.txt}>+876-929-2997</CustomText>
                  </View>
                  <View style={styles.contactButtonWrapper}>
                    <Pressable
                      style={styles.callButton}
                      onPress={() => Linking.openURL('tel:${8769292997}')}
                    >
                      <MaterialCommunityIcons
                        name='phone'
                        size={12}
                        color='#C1126B'
                      />
                      <CustomText style={styles.buttonText}> CALL</CustomText>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <Pressable
          onPress={() => setEmergenvyModal(false)}
          style={customStyles.modalFooter}
        >
          <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
        </Pressable>
      </Modal>
      <Pressable
        style={customStyles.footerTab}
        onPress={() => navigation.navigate('Home Page')}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name='home' size={12} color='#C1126B' />
        </View>
        <CustomText style={customStyles.footerText}>
          <Text>HOME</Text>
        </CustomText>
      </Pressable>
      <Pressable
        style={customStyles.footerTab}
        onPress={() => setEmergenvyModal(true)}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name='phone' size={12} color='#C1126B' />
        </View>
        <CustomText style={customStyles.footerText}>EMERGENCY</CustomText>
        <CustomText style={customStyles.footerText}>HOTLINES</CustomText>
      </Pressable>
      <Pressable
        style={customStyles.footerTab2}
        onPress={() => navigation.navigate('Support Services')}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name='hand-heart' size={12} color='#C1126B' />
        </View>
        <CustomText style={customStyles.footerText}>HOPE</CustomText>
        <CustomText style={customStyles.footerText}>SUPPORTS</CustomText>
      </Pressable>
      <Pressable
        style={customStyles.footerTab3}
        onPress={() => navigation.navigate('Know Your Rights')}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name='gavel' size={12} color='#C1126B' />
        </View>
        <CustomText style={customStyles.footerText}>KNOW</CustomText>
        <CustomText style={customStyles.footerText}>YOUR RIGHTS</CustomText>
      </Pressable>
      <Pressable
        style={customStyles.footerTabExit}
        onPress={() => {
          BackHandler.exitApp();
          Linking.openURL('https://www.jamaica-gleaner.com');
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name='close' size={12} color='#ffffff' />
        </View>
        <CustomText style={customStyles.footerTextExit}>
          <Text>EXIT</Text>
        </CustomText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contactWrapper: {
    flexDirection: 'row',
  },
  contactButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  modalTopWrapper: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  modalHeadingWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  contactText: {
    flex: 2,
    justifyContent: 'center',
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  card: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  txt: {
    fontSize: 22,
    fontFamily: 'bebas-neue',
    textAlign: 'justify',
    color: '#C1126B',
    marginBottom: 20,
  },
  callButton: {
    borderWidth: 1,
    borderColor: '#C1126B',
    marginBottom: 20,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#C1126B',
    fontFamily: 'bebas-neue-bold',
    fontSize: 19,
    textAlign: 'center',
  },
});
