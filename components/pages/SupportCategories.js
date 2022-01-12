import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { CustomButton } from '../custom-components/CustomButton';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';

export const SupportCategories = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={customStyles.modalHeadingWrapper}>
          <CustomText style={customStyles.centeredHeading}>
            GET SUPPORT
          </CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={() => navigation.navigate('Get Support')}>
            <CustomText style={customStyles.buttonText}>
              <Text>KNOW THE SIGNS</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('What Is GBV')}>
            <CustomText style={customStyles.buttonText}>
              <Text>FORMS OF GBV</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('Support Services')}>
            <CustomText style={customStyles.buttonText}>
              <Text>HOPE SUPPORTS</Text>
            </CustomText>
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate('GBV Resources')}>
            <CustomText style={customStyles.buttonText}>
              <Text>USEFUL RESOURCES</Text>
            </CustomText>
          </CustomButton>
        </View>
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
        {/* <View style={styles.topImageWrapper}>
          <Image
            source={require('../../assets/images/unfpa_logo.png')}
            style={styles.unfpaLogo}
          />
          <Image
            source={require('../../assets/images/UNAIDS.png')}
            style={styles.unaidsLogo}
          />
        </View> */}
        <View style={styles.buttonWrapper}>
          <Emergency />
        </View>
        <View style={customStyles.textWrapper}>
          <CustomText style={styles.boldTxt}>
            Bureau of Gender Affairs:
          </CustomText>
          <CustomText style={customStyles.txt}>
            876-553-0387 (M)/876-553-0372(F)
          </CustomText>
          <CustomText style={styles.boldTxt}>
            Child Protection & Family Services Agency (CPFSA):
          </CustomText>
          <CustomText style={customStyles.txt}>888-776-8328</CustomText>
          <CustomText style={styles.boldTxt}>Woman Inc.</CustomText>
          <CustomText style={customStyles.txt}>876-929-2997.</CustomText>
        </View>
        <View style={styles.iconWrapper}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('GBV Resources')}
          >
            <CustomText style={styles.altButtonText}>SUPPORT</CustomText>
            <CustomText style={styles.altButtonText}>SERVICES</CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('GBV Human Rights')}
          >
            <CustomText style={styles.altButtonText}>HUMAN</CustomText>
            <CustomText style={styles.altButtonText}>RIGHTS & GBV</CustomText>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Know Your Rights')}
          >
            <CustomText style={styles.altButtonText}>KNOW YOUR</CustomText>
            <CustomText style={styles.altButtonText}>RIGHTS - GBV</CustomText>
          </Pressable>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  iconWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  topImageWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // borderWidth: 1,
  },
  eveLogo: {
    height: 85,
    width: 80,
  },
  spotlightLogo: {
    height: 75,
    width: 180,
  },
  unfpaLogo: {
    height: 40,
    width: 90,
  },
  unaidsLogo: {
    height: 40,
    width: 205,
  },
  button: {
    // borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    // borderColor: '#C1126B',
    marginVertical: 4,
    // backgroundColor: '#efefef',
  },
  altButtonText: {
    fontFamily: 'bebas-neue',
    textAlign: 'center',
    fontSize: 16,
    color: '#C1126B',
  },
  boldTxt: {
    fontFamily: 'bebas-neue',
    // fontFamily: 'poppins-semibold',
    fontSize: 21,
    color: '#C1126B',
    paddingTop: 5,
  },
});
