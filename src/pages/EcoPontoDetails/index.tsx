import React, { useEffect, useState} from 'react';

import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useRoute } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getPreciseDistance } from 'geolib';
import MapView, { Marker } from 'react-native-maps';

import locationEcoPonto from '../../Context/store/locationEcoPontos.json';
import { EcoPonto } from '../../core/types/EcoPontos';

import { styles } from './styles';

import imageEcoPonts from '../../assets/images/ecoponto_roosveilt1.png';
import mapMarker from '../../assets/icons/marker.png';

type EcoPontoDetailsRouteParams = {
    id: number;
}

const DATAIMG = [
    {
        id: 1,
        image: {src: require('../../assets/images/ecoponto_roosveilt1.png')}
    },
    {
        id: 2,
        image: {src: require('../../assets/images/ecoponto_roosveilt1.png')}
    },
    {
        id: 3,
        image: {src: require('../../assets/images/ecoponto_roosveilt1.png')}
    }
]

export default function EcoPontoDetails() {
    const route = useRoute();
    const params = route.params as EcoPontoDetailsRouteParams;
    const [ecoPonto, setEcoPonto ] = useState<EcoPonto>();
    const [ distance, setDistance ] = useState<number>();

    

    useEffect(() => {
        locationEcoPonto.ecopontos.map((response) => {
            if(response.id === params.id) {
                setEcoPonto(response);
            }
        });

        if(ecoPonto?.latitude !== undefined && ecoPonto?.longitude !== undefined) {
            setDistance(getPreciseDistance({latitude: -18.9127749, longitude: -48.2755227},{latitude: ecoPonto.latitude, longitude: ecoPonto.longitude}));
        }        
    },[ecoPonto, distance]);

    if(!ecoPonto) {
        
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    };

    function handleOpenGoogleMapsRoutes() {

    }

    return (
        <ScrollView style={styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={DATAIMG}
                pagingEnabled
                renderItem={({item, index}) => (
                    <Image source={imageEcoPonts} key={index} style={styles.imageEcoPonts} />
                )}
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{ecoPonto.name}</Text>
                <Text style={styles.titleAddress}>Endereço:</Text>
                <Text style={styles.address}>{ecoPonto.street}, Nº: {ecoPonto.house_number}, Bairro: {ecoPonto.district}</Text>
                <Text style={styles.titleAddress}>Distância aproximada:</Text>
                <Text style={styles.address}>{distance && distance/1000}Km</Text>

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

                <View style={styles.separator} />
            </View>
        </ScrollView>
    );
};