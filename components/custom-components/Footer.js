import React, { useState, useEffect } from 'react';
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
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Footer = ({ navigation }) => {
  const [emergencyModal, setEmergenvyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nationalHotlines, setNationalHotlines] = useState([]);

  useEffect(() => {
    loadNationalHotlines();
  }, []);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/emergency-hotlines');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setNationalHotlines(test.value.data);
        //console.log(test.value.data);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const loadNationalHotlines = async () => {
    setLoading(true);
    const response = await apiRoutes.getNationalHotlines;
    setLoading(false);
    response.data != null
      ? setNationalHotlines(response.data.data)
      : retrieveData();
    //setHowCanIHelp(response.data.data);
  };

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
            {nationalHotlines.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={customStyles.textWrapper}>
                  <View style={styles.modalHeadingWrapper}>
                    <CustomText style={customStyles.boldTxt}>
                      {item.attributes.title}
                    </CustomText>
                  </View>
                  <View style={styles.contactWrapper}>
                    <View style={styles.contactText}>
                      <CustomText style={styles.txt}>
                        {item.attributes.body}
                      </CustomText>
                    </View>
                    <View style={styles.contactButtonWrapper}></View>
                  </View>
                </View>
              </View>
            ))}
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
