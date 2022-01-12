import React from 'react';
import { View, ScrollView, Pressable, Linking, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const NationalHotlines = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={customStyles.headingWrapper}>
          <CustomText style={customStyles.heading}>
            NATIONAL HOTLINES
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
                <CustomText style={styles.txt}>+876-553-0387 (M)</CustomText>
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
                <CustomText style={styles.txt}>+876-553-0372 (F)</CustomText>
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
              <CustomText style={customStyles.boldTxt}>Woman Inc.</CustomText>
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
      <Footer navigation={navigation} />
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
  modalHeadingWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginBottom: 15,
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
