import React from 'react';

import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import locationEcoPonto from '../../Context/store/locationEcoPontos.json';
import { useEffect } from 'react';
import { useState } from 'react';
import { EcoPonto } from '../../core/types/EcoPontos';

type EcoPontoDetailsRouteParams = {
    id: number;
}

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
        <SafeAreaView>
            <Text>EcoPontoDetails</Text>
        </SafeAreaView>
    );
};