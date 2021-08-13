import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EcoPontoMap from './pages/EcoPontoMap';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
    return(
        <NavigationContainer>
             <Navigator
               screenOptions={{ headerShown: false }}
            >
                <Screen
                    name="EcoPontoMap"
                    component={EcoPontoMap}
                />
            </Navigator>
        </NavigationContainer>
    );
};