import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, NativeModules } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SplashScreen } from '../pages/SplashScreen';
import { HomePage } from '../pages/HomePage';
import { Welcome } from '../pages/Welcome';
import { AboutUs } from '../pages/AboutUs';
import { GetSupport } from '../pages/GetSupport';
import { SupportForSelf } from '../pages/SupportForSelf';
import { SupportForOthers } from '../pages/SupportForOthers';
import { HowCanIHelp } from '../pages/HowCanIHelp';
import { SupportServices } from '../pages/SupportServices';
import { GBVResources } from '../pages/GBVResources';
import { MythsAboutGBV } from '../pages/MythsAboutGBV';
import { WhatIsGBV } from '../pages/WhatIsGBV';
import { SafetyPlanning } from '../pages/SafetyPlanning';
import { OnlineSafety } from '../pages/OnlineSafety';
import { Leaving } from '../pages/Leaving';
import { KnowYourRights } from '../pages/KnowYourRights';
import { KnowOurLaws } from '../pages/KnowOurLaws';
import { SexualConsent } from '../pages/SexualConsent';
import { Cases } from '../pages/Cases';
import { GBVHumanRights } from '../pages/GBVHumanRights';
import { Footer } from '../custom-components/Footer';
import { QuizStart } from '../quiz/QuizStart';
import { Quiz1 } from '../quiz/Quiz1';
import { Quiz2 } from '../quiz/Quiz2';
import { Quiz3 } from '../quiz/Quiz3';
import { Quiz4 } from '../quiz/Quiz4';
import { Quiz5 } from '../quiz/Quiz5';
import { Quiz6 } from '../quiz/Quiz6';
import { Quiz7 } from '../quiz/Quiz7';
import { Quiz8 } from '../quiz/Quiz8';
import { Quiz9 } from '../quiz/Quiz9';
import { Quiz10 } from '../quiz/Quiz10';
import { Quiz11 } from '../quiz/Quiz11';
import { QuizEnd } from '../quiz/QuizEnd';
import { Question1 } from '../risk-assessment/Question1';
import { Question2 } from '../risk-assessment/Question2';
import { Question3 } from '../risk-assessment/Question3';
import { Question4 } from '../risk-assessment/Question4';
import { Question5 } from '../risk-assessment/Question5';
import { AssessmentStart } from '../risk-assessment/AssessmentStart';
import { AssessmentSelf1 } from '../risk-assessment/AssessmentSelf1';
import { AssessmentSelf2 } from '../risk-assessment/AssessmentSelf2';
import { AssessmentSelf3 } from '../risk-assessment/AssessmentSelf3';
import { AssessmentSelf4 } from '../risk-assessment/AssessmentSelf4';
import { AssessmentSelf5 } from '../risk-assessment/AssessmentSelf5';
import { AssessmentSelf6 } from '../risk-assessment/AssessmentSelf6';
import { AssessmentSelf7 } from '../risk-assessment/AssessmentSelf7';
import { AssessmentSelf8 } from '../risk-assessment/AssessmentSelf8';
import { AssessmentSelf9 } from '../risk-assessment/AssessmentSelf9';
import { AssessmentSelf10 } from '../risk-assessment/AssessmentSelf10';
import { AssessmentSelf11 } from '../risk-assessment/AssessmentSelf11';
import { AssessmentSelf12 } from '../risk-assessment/AssessmentSelf12';
import { AssessmentSelf13 } from '../risk-assessment/AssessmentSelf13';
import { AssessmentSelf14 } from '../risk-assessment/AssessmentSelf14';
import { AssessmentSelf15 } from '../risk-assessment/AssessmentSelf15';
import { AssessmentSelf16 } from '../risk-assessment/AssessmentSelf16';
import { AssessmentSelf17 } from '../risk-assessment/AssessmentSelf17';
import { AssessmentOthers1 } from '../risk-assessment/AssessmentOthers1';
import { AssessmentOthers2 } from '../risk-assessment/AssessmentOthers2';
import { AssessmentOthers3 } from '../risk-assessment/AssessmentOthers3';
import { AssessmentOthers4 } from '../risk-assessment/AssessmentOthers4';
import { AssessmentOthers5 } from '../risk-assessment/AssessmentOthers5';
import { AssessmentOthers6 } from '../risk-assessment/AssessmentOthers6';
import { AssessmentOthers7 } from '../risk-assessment/AssessmentOthers7';
import { AssessmentOthers8 } from '../risk-assessment/AssessmentOthers8';
import { AssessmentOthers9 } from '../risk-assessment/AssessmentOthers9';
import { AssessmentOthers10 } from '../risk-assessment/AssessmentOthers10';
import { AssessmentOthers11 } from '../risk-assessment/AssessmentOthers11';
import { AssessmentOthers12 } from '../risk-assessment/AssessmentOthers12';
import { AssessmentOthers13 } from '../risk-assessment/AssessmentOthers13';
import { AssessmentOthers14 } from '../risk-assessment/AssessmentOthers14';
import { AssessmentEnd } from '../risk-assessment/AssessmentEnd';
import { AssessmentEndOthers } from '../risk-assessment/AssessmentEndOthers';
import { NoSelected } from '../risk-assessment/NoSelected';
import { SupportCategories } from '../pages/SupportCategories';
import { NationalHotlines } from '../pages/NationalHotlines';

export const ScreenNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Home Page' component={HomePage} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Get Support' component={GetSupport} />
        <Stack.Screen name='Support Categories' component={SupportCategories} />
        <Stack.Screen name='Support For Self' component={SupportForSelf} />
        <Stack.Screen name='Support For Others' component={SupportForOthers} />
        <Stack.Screen name='How Can I Help' component={HowCanIHelp} />
        <Stack.Screen name='Support Services' component={SupportServices} />
        <Stack.Screen name='GBV Resources' component={GBVResources} />
        <Stack.Screen name='Myths About GBV' component={MythsAboutGBV} />
        <Stack.Screen name='What Is GBV' component={WhatIsGBV} />
        <Stack.Screen name='Safety Planning' component={SafetyPlanning} />
        <Stack.Screen name='Online Safety' component={OnlineSafety} />
        <Stack.Screen name='GBV Human Rights' component={GBVHumanRights} />
        <Stack.Screen name='Know Your Rights' component={KnowYourRights} />
        <Stack.Screen name='Know Our Laws' component={KnowOurLaws} />
        <Stack.Screen name='Sexual Consent' component={SexualConsent} />
        <Stack.Screen name='Cases' component={Cases} />
        <Stack.Screen name='Leaving' component={Leaving} />
        <Stack.Screen name='Footer' component={Footer} />
        <Stack.Screen name='Quiz Start' component={QuizStart} />
        <Stack.Screen name='Quiz 1' component={Quiz1} />
        <Stack.Screen name='Quiz 2' component={Quiz2} />
        <Stack.Screen name='Quiz 3' component={Quiz3} />
        <Stack.Screen name='Quiz 4' component={Quiz4} />
        <Stack.Screen name='Quiz 5' component={Quiz5} />
        <Stack.Screen name='Quiz 6' component={Quiz6} />
        <Stack.Screen name='Quiz 7' component={Quiz7} />
        <Stack.Screen name='Quiz 8' component={Quiz8} />
        <Stack.Screen name='Quiz 9' component={Quiz9} />
        <Stack.Screen name='Quiz 10' component={Quiz10} />
        <Stack.Screen name='Quiz 11' component={Quiz11} />
        <Stack.Screen name='Quiz End' component={QuizEnd} />
        <Stack.Screen name='Question 1' component={Question1} />
        <Stack.Screen name='Question 2' component={Question2} />
        <Stack.Screen name='Question 3' component={Question3} />
        <Stack.Screen name='Question 4' component={Question4} />
        <Stack.Screen name='Question 5' component={Question5} />
        <Stack.Screen name={'Assessment Start'} component={AssessmentStart} />
        <Stack.Screen name='Assessment Self 1' component={AssessmentSelf1} />
        <Stack.Screen name='Assessment Self 2' component={AssessmentSelf2} />
        <Stack.Screen name='Assessment Self 3' component={AssessmentSelf3} />
        <Stack.Screen name='Assessment Self 4' component={AssessmentSelf4} />
        <Stack.Screen name='Assessment Self 5' component={AssessmentSelf5} />
        <Stack.Screen name='Assessment Self 6' component={AssessmentSelf6} />
        <Stack.Screen name='Assessment Self 7' component={AssessmentSelf7} />
        <Stack.Screen name='Assessment Self 8' component={AssessmentSelf8} />
        <Stack.Screen name='Assessment Self 9' component={AssessmentSelf9} />
        <Stack.Screen name='Assessment Self 10' component={AssessmentSelf10} />
        <Stack.Screen name='Assessment Self 11' component={AssessmentSelf11} />
        <Stack.Screen name='Assessment Self 12' component={AssessmentSelf12} />
        <Stack.Screen name='Assessment Self 13' component={AssessmentSelf13} />
        <Stack.Screen name='Assessment Self 14' component={AssessmentSelf14} />
        <Stack.Screen name='Assessment Self 15' component={AssessmentSelf15} />
        <Stack.Screen name='Assessment Self 16' component={AssessmentSelf16} />
        <Stack.Screen name='Assessment Self 17' component={AssessmentSelf17} />
        <Stack.Screen
          name='Assessment Others 1'
          component={AssessmentOthers1}
        />
        <Stack.Screen
          name='Assessment Others 2'
          component={AssessmentOthers2}
        />
        <Stack.Screen
          name='Assessment Others 3'
          component={AssessmentOthers3}
        />
        <Stack.Screen
          name='Assessment Others 4'
          component={AssessmentOthers4}
        />
        <Stack.Screen
          name='Assessment Others 5'
          component={AssessmentOthers5}
        />
        <Stack.Screen
          name='Assessment Others 6'
          component={AssessmentOthers6}
        />
        <Stack.Screen
          name='Assessment Others 7'
          component={AssessmentOthers7}
        />
        <Stack.Screen
          name='Assessment Others 8'
          component={AssessmentOthers8}
        />
        <Stack.Screen
          name='Assessment Others 9'
          component={AssessmentOthers9}
        />
        <Stack.Screen
          name='Assessment Others 10'
          component={AssessmentOthers10}
        />
        <Stack.Screen
          name='Assessment Others 11'
          component={AssessmentOthers11}
        />
        <Stack.Screen
          name='Assessment Others 12'
          component={AssessmentOthers12}
        />
        <Stack.Screen
          name='Assessment Others 13'
          component={AssessmentOthers13}
        />
        <Stack.Screen
          name='Assessment Others 14'
          component={AssessmentOthers14}
        />
        <Stack.Screen name='Assessment End' component={AssessmentEnd} />
        <Stack.Screen
          name='Assessment End Others'
          component={AssessmentEndOthers}
        />
        <Stack.Screen name='No Selected' component={NoSelected} />
        <Stack.Screen name='National Hotlines' component={NationalHotlines} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='HOME'
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name='HOME' component={HomeStack} />
        <Drawer.Screen name='ABOUT US' component={AboutUs} />
        <Drawer.Screen name='FORMS OF GBV' component={WhatIsGBV} />
        <Drawer.Screen name='GBV AND HUMAN RIGHTS' component={GBVHumanRights} />
        <Drawer.Screen name='DO YOU KNOW OUR LAWS?' component={KnowOurLaws} />
        <Drawer.Screen
          name='DO YOU KNOW YOUR RIGHTS?'
          component={KnowYourRights}
        />
        <Drawer.Screen name='SEXUAL CONSENT' component={SexualConsent} />
        <Drawer.Screen name='ONLINE SAFETY' component={OnlineSafety} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
