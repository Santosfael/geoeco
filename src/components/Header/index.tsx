import React from 'react';
import { Text, View } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15b5d6" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {
                showCancel ? (
                    <BorderlessButton onPress={() => {}}>
                        <Feather name="x" size={24} color="#ff669d" />
                    </BorderlessButton>
                ) : (
                    <View />
                )
            }
        </View>
    );
};