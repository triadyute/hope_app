import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import customStyles from '../styles/Styles';
import CustomText from './CustomText';

export const ListItem = (props) => {
  return (
    <View style={customStyles.listItem}>
      <Text style={{ color: '#C1126B' }}>{'\u2022'}</Text>
      <CustomText style={customStyles.listText}>
        <Text>{props.children}</Text>
      </CustomText>
    </View>
  );
};
