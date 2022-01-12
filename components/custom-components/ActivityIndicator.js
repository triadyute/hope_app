import React from 'react';
import LottieView from 'lottie-react-native';
export const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={'../../assets/animations/835-loading.json'}
    />
  );
};
