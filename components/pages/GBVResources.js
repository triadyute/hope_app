import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { ListItem } from '../custom-components/ListItem';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';
import { CustomButton } from '../custom-components/CustomButton';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const GBVResources = ({ navigation }) => {
  const [howCanIHelp, setHowCanIHelp] = useState([]);
  const [loading, setLoading] = useState(false);
  //MODALS
  const [HowCanIHelpModal, setHowCanIHelpModal] = useState(false);
  const [PsychologicalSupportModal, setPsychologicalSupportModal] =
    useState(false);
  const [MedicalSupportModal, setMedicalSupportModal] = useState(false);
  const [LegalAssistanceModal, setLegalAssistanceModal] = useState(false);
  const [SafeShelterModal, setSafeShelterModal] = useState(false);
  const [PsychosocialSupportModal, setPsychosocialSupportModal] =
    useState(false);
  const [SocialServicesModal, setSocialServicesModal] = useState(false);
  useEffect(() => {
    loadHowCanIHelp();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/resources');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setHowCanIHelp(test.value.data);
        //console.log(test.value.data);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const loadHowCanIHelp = async () => {
    setLoading(true);
    const response = await apiRoutes.getResources;
    setLoading(false);
    // if (!response.ok) return setError(true);
    //setHowCanIHelp(response.data.data);
    response.data != null ? setHowCanIHelp(response.data.data) : retrieveData();
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/gbv_resources-01.jpg')}
          />
        </View>
        {howCanIHelp.map((item) => (
          <View key={item.id} style={customStyles.textWrapper}>
            {!item.attributes.modalID ? (
              <View>
                <View style={styles.subheadingWrapper}>
                  <CustomText style={customStyles.boldHeading}>
                    {item.attributes.title}
                  </CustomText>
                </View>
                <Markdown styles={markdownFonts}>
                  {item.attributes.body}
                </Markdown>
              </View>
            ) : (
              <View>
                <Modal
                  visible={eval(item.attributes.modalID)}
                  animationType='slide'
                >
                  <ScrollView style={customStyles.modalWrapper}>
                    <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
                      <CustomText style={customStyles.boldHeading}>
                        {item.attributes.title}
                      </CustomText>
                    </View>
                    <View style={styles.textWrapper}>
                      <Markdown styles={markdownFonts}>
                        {item.attributes.body}
                      </Markdown>
                    </View>
                  </ScrollView>
                  <Pressable
                    onPress={() => {
                      eval('set' + item.attributes.modalID + '(false)');
                    }}
                    style={customStyles.modalFooter}
                  >
                    <CustomText style={customStyles.modalFooterTxt}>
                      Close
                    </CustomText>
                  </Pressable>
                </Modal>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    eval('set' + item.attributes.modalID + '(true)');
                  }}
                >
                  <CustomText style={styles.altButtonText}>
                    {item.attributes.title}
                  </CustomText>
                </Pressable>
              </View>
            )}
          </View>
        ))}
        <View style={{ paddingHorizontal: 30 }}>
          <Emergency />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 30,
  },
  subheadingWrapper: {
    paddingVertical: 5,
  },
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  buttonWrapper: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: '#C1126B',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  altButtonText: {
    fontFamily: 'poppins-semibold',
    color: '#C1126B',
    fontSize: 15,
    textAlign: 'center',
  },
});

{
  /* <View style={customStyles.listItem}>
  <Text>{'\u2022'}</Text>
  <CustomText style={customStyles.listText}>
    <Text></Text>
  </CustomText>
</View>; */
}
