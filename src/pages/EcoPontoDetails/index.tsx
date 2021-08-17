import React, { useEffect, useState} from 'react';

import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import locationEcoPonto from '../../Context/store/locationEcoPontos.json';
import { EcoPonto } from '../../core/types/EcoPontos';

import { styles } from './styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import imageEcoPonts from '../../assets/images/ecoponto_roosveilt1.png';

type EcoPontoDetailsRouteParams = {
    id: number;
}

const DATAIMG = [
    {
        id: 1,
        image: {imageEcoPonts}
    },
    {
        id: 2,
        image: {imageEcoPonts}
    },
    {
        id: 3,
        image: {imageEcoPonts}
    }
]

export default function EcoPontoDetails() {
    const route = useRoute();
    const params = route.params as EcoPontoDetailsRouteParams;
    const [ecoPonto, setEcoPonto ] = useState<EcoPonto>();

    useEffect(() => {
        locationEcoPonto.ecopontos.map((response) => {
            if(response.id === params.id) {
                setEcoPonto(response);
            }
        });
        console.log(ecoPonto);
    },[ecoPonto]);

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
        </ScrollView>
    );
};