import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from './CustomText';
import customStyles from '../styles/Styles';

export const Header = (props) => {
  return (
    <View style={styles.headingWrapper}>
      <View>
        <Pressable
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons name='arrow-back' size={20} color='#C1126B' />
        </Pressable>
      </View>
      <View style={styles.headingText}>
        <CustomText style={styles.headingText}>
          <Text>
            <Text style={customStyles.boldHeadingText}>HOPE</Text> - HELPING OUR
            PEOPLE EMERGE
          </Text>
        </CustomText>
      </View>
      <View>
        <Pressable
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Ionicons name='menu-sharp' size={23} color='#C1126B' />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    paddingTop: 35,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headingText: {
    color: '#C1126B',
    fontFamily: 'bebas-neue',
    fontSize: 19,
  },
});
