import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
export const CustomButton = (props) => {
  return (
    <View>
      <Pressable onPress={props.onPress} style={styles.btn}>
        {props.children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#C1126B',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
});
