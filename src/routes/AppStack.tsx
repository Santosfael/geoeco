import React, { ReactNode } from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import EcoPontoDetails from "../pages/EcoPontoDetails";
import HomeTab from "./HomeTab";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="HomeTab" component={HomeTab} />
                <Screen name="EcoPontoDetails" component={EcoPontoDetails} />
            </Navigator>
        </NavigationContainer>
    )
}