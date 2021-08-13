import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useFonts } from '@expo-google-fonts/nunito';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from './src/assets/images/marker.png';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -18.9127749,
          longitude: -48.2755227,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -18.9127749,
            longitude: -48.2755227,
          }}
        >
          <Callout tooltip={true} onPress={() => {}}>
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Ecoponto Luizote de Freitas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View>
        <Text>Menu footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 240,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  }
});
