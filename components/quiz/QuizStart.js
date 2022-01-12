import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CustomButton } from '../custom-components/CustomButton';
import CustomText from '../custom-components/CustomText';
import customStyles from '../styles/Styles';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';

export const QuizStart = ({ navigation }) => {
  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <View style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/hope_logo_2.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.headingWrapper}>
          <CustomText style={styles.heading}>
            <Text>TEST YOUR KNOWLEDGE</Text>
          </CustomText>
        </View>
        <View style={styles.textWrapper}>
          <CustomText style={styles.txt}>
            <Text>
              Click agree or disagree to indicate your agreement or disagreement
              with the statements.
            </Text>
          </CustomText>
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton onPress={() => navigation.navigate('Quiz 1')}>
            <CustomText style={customStyles.buttonText}>TAKE QUIZ</CustomText>
          </CustomButton>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageWrapper: { flex: 4, justifyContent: 'flex-end', alignItems: 'center' },
  image: {
    height: 99,
    width: 245,
  },
  headingWrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  heading: {
    fontFamily: 'bebas-neue-bold',
    fontSize: 60,
    textAlign: 'center',
    color: '#C1126B',
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  txt: {
    fontFamily: 'poppins-semibold',
    color: 'grey',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonWrapper: { flex: 3, paddingHorizontal: 30 },
});
