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

export const Leaving = ({ navigation }) => {
  const [howCanIHelp, setHowCanIHelp] = useState([]);
  const [loading, setLoading] = useState(false);
  //MODALS
  const [PreparingToLeaveModal, setPreparingToLeaveModal] = useState(false);
  const [AfterYouLeaveModal, setAfterYouLeaveModal] = useState(false);

  useState(false);
  useEffect(() => {
    loadLeavingTheRelationship();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(
        'cache/leaving-the-relationships'
      );
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
  const loadLeavingTheRelationship = async () => {
    setLoading(true);
    const response = await apiRoutes.getLeavingTheRelationship;
    setLoading(false);
    response.data != null ? setHowCanIHelp(response.data.data) : retrieveData();

    //setHowCanIHelp(response.data.data);
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/leaving_the_relationship-01.jpg')}
          />
        </View>
        {howCanIHelp.map((item) => (
          <View key={item.id} style={customStyles.textWrapper}>
            <Modal
              visible={eval(item.attributes.modalID)}
              animationType='=slide'
            >
              <ScrollView style={customStyles.modalWrapper}>
                <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
                  <CustomText style={customStyles.heading}>
                    {item.attributes.title}
                  </CustomText>
                </View>
                <View style={customStyles.textWrapper}>
                  <Markdown styles={markdownFonts}>
                    {item.attributes.body}
                  </Markdown>
                </View>
              </ScrollView>
              <Pressable
                style={customStyles.modalFooter}
                onPress={() => {
                  eval('set' + item.attributes.modalID + '(false)');
                }}
              >
                <CustomText style={customStyles.modalFooterTxt}>
                  Close
                </CustomText>
              </Pressable>
            </Modal>
            <View style={styles.subheadingWrapper}>
              <CustomText style={customStyles.heading}>
                {item.attributes.title}
              </CustomText>
            </View>
            {item.attributes.modalID ? (
              <Markdown styles={markdownFonts}>
                {item.attributes.body.substring(0, 115)}
              </Markdown>
            ) : (
              <Markdown styles={markdownFonts}>{item.attributes.body}</Markdown>
            )}
            <View style={{ marginBottom: 10 }}>
              {item.attributes.modalID && (
                <CustomButton
                  onPress={() => {
                    eval('set' + item.attributes.modalID + '(true)');
                  }}
                >
                  <CustomText style={customStyles.buttonText}>
                    READ MORE
                  </CustomText>
                </CustomButton>
              )}
            </View>
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
  subheadingWrapper: {},
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
});
