import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  Image,
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { ListItem } from '../custom-components/ListItem';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const SafetyPlanning = ({ navigation }) => {
  const [safetyPlanningContent, setSafetyPlanningContent] = useState([]);
  const [loading, setLoading] = useState(false);
  //MODALS
  const [SafetyPlanningModal, setSafetyPlanningModal] = useState(false);
  const [PhysicalSafetyModal, setPhysicalSafetyModal] = useState(false);
  const [SafetyWithChildrenModal, setSafetyWithChildrenModal] = useState(false);
  const [EmotionalSafetyModal, setEmotionalSafetyModal] = useState(false);
  const [EmotionalSafetyForKidsModal, setEmotionalSafetyForKidsModal] =
    useState(false);
  useEffect(() => {
    loadSafetyPlanning();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/safety-plannings');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setSafetyPlanningContent(test.value.data);
        //console.log(test.value.data);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadSafetyPlanning = async () => {
    setLoading(true);
    const response = await apiRoutes.getSafetyPlanning;
    setLoading(false);
    // console.log(response.data);
    response.data != null
      ? setSafetyPlanningContent(response.data.data)
      : retrieveData();
    // console.log(safetyPlanningContent);
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/safety_planning-01.jpg')}
          />
        </View>
        <ActivityIndicator animating={loading} />
        {safetyPlanningContent.map((item) => (
          <View key={item.id} style={customStyles.textWrapper}>
            <Modal
              visible={eval(item.attributes.modalID)}
              animationType='slide'
            >
              <ScrollView style={customStyles.modalWrapper}>
                <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
                  <CustomText style={customStyles.heading}>
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
            <CustomText style={customStyles.heading}>
              {item.attributes.title}
            </CustomText>
            <Markdown styles={markdownFonts}>
              {item.attributes.body.substring(0, 132)}
            </Markdown>
            <View style={styles.buttonWrapper}>
              <CustomButton
                onPress={() => {
                  eval('set' + item.attributes.modalID + '(true)');
                }}
              >
                <CustomText style={customStyles.buttonText}>
                  READ MORE
                </CustomText>
              </CustomButton>
            </View>
          </View>
        ))}

        <View style={styles.textWrapper}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Leaving')}
          >
            <CustomText style={styles.buttonTxt}>
              LEAVING THE RELATIONSHIP
            </CustomText>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
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
    paddingTop: 5,
  },
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  buttonWrapper: {
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderColor: '#C1126B',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTxt: {
    fontSize: 15,
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    color: '#C1126B',
  },
});
