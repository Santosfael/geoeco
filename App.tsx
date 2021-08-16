import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useFonts } from '@expo-google-fonts/nunito';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import AppStack from './src/routes/AppStack';
import { View } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <AppStack />
    </>
  );
}
