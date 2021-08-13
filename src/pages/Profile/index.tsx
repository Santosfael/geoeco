import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import profileImg from '../../assets/images/profile.png';
import backgroundImg from '../../assets/images/nature_profile.png';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default function Profile() {

    return (
        <View style={styles.container}>
            <Image source={backgroundImg} style={styles.backgroundProfile} />
            <View style={styles.contatinerUser}>
                <View style={styles.contentProfile}>
                    <View style={styles.contentUser}>
                        <Text style={styles.nameUser}>Rafael Rocha</Text>
                        <Text style={styles.emailUser}>rafael@gmail.com</Text>
                    </View>
                    <Image source={profileImg} style={styles.imgProfile} />
                </View>
                <RectButton style={styles.buttonEdit}>
                    <Text style={styles.textButton}>Editar</Text>
                </RectButton>
            </View>
            <View style={styles.containerInfor}>
                <Text >Localização: Uberlândia</Text>
            </View>
        </View>
    );
}
