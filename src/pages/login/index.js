// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, View, Image } from 'react-native';
import { Text, Button} from 'react-native-elements';
// import { color } from 'react-native-elements/dist/helpers';
// import { TextInput } from 'react-native-web';
import global from '../../../style/global';
import styles from './styles';

export default function Login({ navigation }) { //Declaração do componponentes
    const [cod, setCod] = useState(null)
    const [password, setPassowrd] = useState(null)

    return (
        <View style={global.container}>
            <Image style={global.logo}
                source={require('../../img/logoScoreFit.png')}
            />

            <TextInput  // Codigo
                style={styles.cod}
                placeholder="Código"
                onChangeText={value => setCod(value)}
                keyboardType="number-pad"
                placeholderTextColor="#BBBBBB"
                inputStyle={{ color: '#A04B5A' }} />

            <TextInput // Password
                style={styles.password}
                placeholder="Sua senha"
                onChangeText={value => setPassowrd(value)}
                secureTextEntry={true}
                placeholderTextColor="#BBBBBB" />

            <Button // Login
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
                
            />
            <Text style={global.color.cinza}>Esqueci a senha</Text>

            <Text style={styles.footer}>Ao entrar no aplicativo, você concorda com os nosso{"\n"}Termos e Politica de Privacidade </Text>
        </View>
    );
}

