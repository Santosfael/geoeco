import React, { useEffect, useState } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import mapMarker from '../../assets/icons/marker.png';

import locationEcoPonto from "../../Context/store/locationEcoPontos.json";

import { styles } from './styles';

type EcopontoProps = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function EcoPontoMap() {

  const [ecoPontos, setEcoPontos] = useState<EcopontoProps[]>([]);

  const navigation = useNavigation();

  function handleNavigateEcoPontoDetails(id: number) {
    navigation.navigate("EcoPontoDetails", { id });
  }

  useEffect(() => {
    setEcoPontos(locationEcoPonto.ecopontos);
  }, [ecoPontos]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -18.9127749,
          longitude: -48.2755227,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {
          ecoPontos.map(ecoPonto => {
            return (
              <Marker
               key={ecoPonto.id}
                icon={mapMarker}
                coordinate={{
                  latitude: ecoPonto.latitude,
                  longitude: ecoPonto.longitude,
                }}
              >
                <Callout tooltip={true} onPress={() => handleNavigateEcoPontoDetails(ecoPonto.id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{ecoPonto.name}</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })
        }
        
      </MapView>
      <View>
        <Text>Menu footer</Text>
      </View>
    </View>
  );
}
