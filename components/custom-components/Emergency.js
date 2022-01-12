import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { AltButton } from './AltButton';
import CustomText from './CustomText';
import customStyles from '../styles/Styles';
import Styles from '../styles/Styles';
import { Ionicons } from '@expo/vector-icons';

export const Emergency = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={styles.buttonWrapper}>
        <AltButton onPress={() => Linking.openURL('tel:${119}')}>
          <CustomText style={styles.buttonText}>
            <View style={styles.callIcon}>
              <Ionicons name='call' size={14} color='#C1126B' />
            </View>
            <Text>Call Police 119</Text>
          </CustomText>
        </AltButton>
        {/* <AltButton onPress={() => Linking.openURL('tel:${110}')}>
          <CustomText style={styles.buttonText}>
            <View style={styles.callIcon}>
              <Ionicons name='call' size={14} color='#C1126B' />
            </View>
            <Text>Call Fire and Ambulance 110</Text>
          </CustomText>
        </AltButton> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#C1126B',
    fontFamily: 'bebas-neue-bold',
    fontSize: 19,
  },
  callIcon: {
    paddingRight: 5,
  },
});
