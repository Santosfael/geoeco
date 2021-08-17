import React, { ReactNode } from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import EcoPontoDetails from "../pages/EcoPontoDetails";
import HomeTab from "./HomeTab";
import Header from '../components/Header';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
    return (
        
        <NavigationContainer>
            <Navigator screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#f2f3f5'
                    }
                }}
            >
                <Screen name="HomeTab" component={HomeTab} />
                <Screen 
                    name="EcoPontoDetails" 
                    component={EcoPontoDetails} 
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title={'Ecoponto'} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}