import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from '../../assets/images/marker.png';
import { styles } from './styles';

export default function EcoPontoMap() {

  return (
    <View style={styles.container}>
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
            <Text style={styles.calloutText}>Ecoponto L</Text>
            </View>
          </Callout>
        </Marker>

        <Marker 
          icon={mapMarker}
          coordinate={{
            latitude: -18.9115035,
            longitude: -48.3369172,
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
