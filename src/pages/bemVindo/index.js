import React from 'react';
import { View, Text, Image } from 'react-native';
import global from '../../../style/global';
import styles from './style';
import { Button } from 'react-native-elements';

export default function bemVindo({ navigation }) {

    return (
        <View style={global.container}>
            <Image style={global.logo}
                source={require('../../img/logoScoreFit.png')}
            />

            <Text style={styles.acompanhamento}>Acompanhamento, prograssão em{"\n"}um só lugar</Text>

            <Button style={global.button}
                title="Entrar"
                titleStyle={{ color: '#A04B5A' }}
                buttonStyle={{
                    backgroundColor: '#0A0F10',
                    borderColor: '#2C3D41',
                    borderWidth: 1,
                    borderRadius: 12,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
            <Text style={styles.footer}>Faça o login para começar</Text>
        </View>
    );
}