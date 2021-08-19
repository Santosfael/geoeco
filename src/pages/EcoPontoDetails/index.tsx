import React, { useEffect, useState } from 'react';

import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from "@react-navigation/native";
import { getPreciseDistance } from 'geolib';

import locationEcoPonto from '../../core/database/locationEcoPontos.json';
import { EcoPonto } from '../../core/types/EcoPontos';

import { styles } from './styles';

import mapMarker from '../../assets/icons/marker.png';

type EcoPontoDetailsRouteParams = {
    id: number;
}

export default function EcoPontoDetails() {
    const route = useRoute();
    const params = route.params as EcoPontoDetailsRouteParams;
    const [ecoPonto, setEcoPonto] = useState<EcoPonto>();
    const [distance, setDistance] = useState<number>();



    useEffect(() => {
        locationEcoPonto.ecopontos.map((response) => {
            if (response.id === params.id) {
                setEcoPonto(response);
            }
        });

        if (ecoPonto?.latitude !== undefined && ecoPonto?.longitude !== undefined) {
            setDistance(getPreciseDistance({ latitude: -18.9127749, longitude: -48.2755227 }, { latitude: ecoPonto.latitude, longitude: ecoPonto.longitude }));
        }
    }, [ecoPonto, distance]);

    if (!ecoPonto) {

        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    };

    function handleOpenGoogleMapsRoutes() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${ecoPonto?.latitude},${ecoPonto?.longitude}`);
    }

    return (
        <ScrollView style={styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={ecoPonto.images}
                pagingEnabled
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <Image source={{ uri: item.url }} key={index} style={styles.imageEcoPonts} />
                )}
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{ecoPonto.name}</Text>
                <Text style={styles.titleAddress}>Endereço:</Text>
                <Text style={styles.address}>{ecoPonto.street}, Nº: {ecoPonto.house_number}, Bairro: {ecoPonto.district}</Text>
                <Text style={styles.titleAddress}>Distância aproximada:</Text>
                <Text style={styles.address}>{distance && distance / 1000}Km</Text>
                <Text style={styles.titleAddress}>Horário de funcionamento:</Text>
                <Text style={styles.address}>{ecoPonto.opering_hours}</Text>
                <Text style={styles.titleAddress}>Dias de funcionamento:</Text>
                <Text style={styles.address}>{ecoPonto.dayWeek}</Text>

                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={{
                            latitude: ecoPonto.latitude,
                            longitude: ecoPonto.longitude,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }}
                        zoomControlEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                        style={styles.mapStyle}
                    >
                        <Marker
                            icon={mapMarker}
                            coordinate={{
                                latitude: ecoPonto.latitude,
                                longitude: ecoPonto.longitude,
                            }}
                        />
                    </MapView>

                    <TouchableOpacity onPress={handleOpenGoogleMapsRoutes} style={styles.buttonRoutesContainer}>
                        <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};