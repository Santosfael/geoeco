import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

import mapMarker from '../../assets/images/marker.png';
import { styles } from './styles';

export default function Settings() {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Settings</Text>
        </SafeAreaView>
    );
}
