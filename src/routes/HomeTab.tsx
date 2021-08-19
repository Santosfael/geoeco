import React, { ReactNode } from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from '../pages/Settings';
import EcoPontoMap from '../pages/EcoPontoMap';
import Profile from '../pages/Profile';

import mapaIcon from '../assets/icons/mapa.png';
import profileIcon from '../assets/icons/user.png';
import settingsIcon from '../assets/icons/settings.png';

type Props = {
    focused: boolean;
}

const { Navigator, Screen } = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }: any) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                elevation: 5,
            }}>
                {children}
            </View>
        </TouchableOpacity>
    );
}

export default function HomeTab() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius: 15,
                    borderTopEndRadius: 15,
                    height: 70,
                }
            }}
            initialRouteName={'EcoPontoMap'}
        >
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }: Props) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={profileIcon}
                                resizeMode="contain"
                                style={{
                                    width: 36,
                                    height: 36,
                                    tintColor: focused ? '#8eab57' : '#748c94',
                                }}
                            />
                            <Text style={{ color: focused ? '#8eab57' : '#748c94', fontSize: 12 }}>Profile</Text>
                        </View>
                    ),
                }}
            />

            <Screen
                name="EcoPontoMap"
                component={EcoPontoMap}

                options={{
                    tabBarIcon: ({ focused }: Props) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={mapaIcon}
                                resizeMode="contain"
                                style={{
                                    width: 70,
                                    height: 70,
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (children: ReactNode) => (

                        <CustomTabBarButton {...children} />
                    )
                }}
            />

            <Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }: Props) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={settingsIcon}
                                resizeMode="contain"
                                style={{
                                    width: 36,
                                    height: 36,
                                    tintColor: focused ? '#8eab57' : '#748c94',
                                }}
                            />
                            <Text style={{ color: focused ? '#8eab57' : '#748c94', fontSize: 12 }}>Settings</Text>
                        </View>
                    ),
                }}
            />
        </Navigator>
    );
};