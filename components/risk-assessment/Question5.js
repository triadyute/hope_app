import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Inage,
  Modal,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const Question5 = ({ navigation, route }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectParish, setSelectedParish] = useState(false);
  const [parish, setParish] = useState('Kingston & St Andrew');
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            <Text>{route.params.choice}</Text>
          </CustomText>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/location.png')}
            style={styles.image}
          />
        </View>

        <Modal transparent={true} visible={selectParish}>
          <View style={styles.overlay}>
            <View style={styles.body}>
              <View style={customStyles.modalHeadingWrapper}>
                <CustomText style={{ textAlign: 'center', fontSize: 16 }}>
                  Select parish
                </CustomText>
              </View>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Kingston & St. Andrew');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>
                  Kingston & St. Andrew
                </CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. Thomas');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. Thomas</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Portland');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Portland</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. Mary');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. mary</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. Catherine');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. Catherine</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. Ann');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. Ann</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Manchester');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Manchester</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Clarendon');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Clarendon</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. Elizabeth');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. Elizabeth</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Trelawny');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Trelawny</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Hanover');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Hanover</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('St. james');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>St. james</CustomText>
              </Pressable>
              <Pressable
                style={styles.selectOption}
                onPress={() => {
                  setParish('Westmoreland');
                  setSelectedParish(false);
                }}
              >
                <CustomText style={styles.txt}>Westmoreland</CustomText>
              </Pressable>
              <Pressable
                style={{ paddingHorizontal: 10 }}
                onPress={() => setSelectedParish(false)}
              >
                <CustomText
                  style={{ textAlign: 'center', paddingVertical: 10 }}
                >
                  Cancel
                </CustomText>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.textWrapper}>
          <CustomText style={styles.text}>
            <Text>Where do you live?</Text>
          </CustomText>
        </View>
        <View style={styles.dropdownWrapper}>
          <Pressable onPress={() => setSelectedParish(true)}>
            <CustomText>{parish}</CustomText>
          </Pressable>
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
  dropdownWrapper: {
    marginHorizontal: 50,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#efefef',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  body: {
    backgroundColor: '#ffffff',
    width: 300,
  },
  selectOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#efefef',
    width: '100%',
  },
  txt: {
    fontFamily: 'poppins-semibold',
    fontSize: 14,
    textAlign: 'center',
    color: '#888888',
  },
  listHeading: {
    fontFamily: 'poppins-semibold',
    fontSize: 16,
  },
});
