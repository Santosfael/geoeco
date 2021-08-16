import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import backgroundImg from '../../assets/images/nature_profile.png';
import profileImg from '../../assets/images/profile.png';
import { styles } from './styles';

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
                <View style={styles.contentDatas}>
                    <View style={styles.cardDatas}>
                        <Text style={styles.textTitle} >Pontos{"\n"}Acomulados</Text>
                        <Text style={styles.textSubTitle} >10</Text>
                    </View>

                    <View style={styles.cardDatas}>
                        <Text style={styles.textTitle}>Quantidade de entrega mês</Text>
                        <Text style={styles.textSubTitle} >10</Text>
                    </View>

                    <View style={styles.cardDatas}>
                        <Text style={styles.textTitle}>Quantidade Anual</Text>
                        <Text style={styles.textSubTitle} >10</Text>
                    </View>
                </View>
            </View>

            <View style={styles.contentOtherData}>
                <Text style={styles.textTitleOtherData}>Outros Dados</Text>
                <View style={styles.dataContact}>
                     <View>
                        <Text style={styles.textTitle}>Contato/WhatsApp</Text>
                        <Text style={[styles.textSubTitle, {marginTop: 10}]}>(34) 9.9999-9999</Text>
                     </View>
                     <View>
                        <Text style={styles.textTitle}>Localização</Text>
                        <Text style={[styles.textSubTitle, {marginTop: 10}]}>Uberlândia-MG</Text>
                     </View>
                </View>

                <RectButton style={styles.buttonListData}>
                    <Text style={styles.textButton}>Historico de entregas</Text>
                    <Feather name="chevron-right" size={32} color="#fff" />
                </RectButton>
            </View>
        </View>
    );
}
