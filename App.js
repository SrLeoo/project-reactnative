import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button, colors } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { TextInput } from 'react-native-web';

export default function App() {

  const [cod, setCod] = useState(null)
  const [password, setPassowrd] = useState(null)

  return (
    <View style={styles.container}>
      <Text h1>Projeto</Text>
      <Text h1 style={colorPrincipal.principal}>Legal</Text>

      <Input  // Codigo
        placeholder="Código"
        leftIcon={{ type: 'font-awesome', name: 'user', color: '#A04B5A' }}
        onChangeText={value => setCod(value)}
        style={{ color: '#A04B5A' }}
        keyboardType="number-pad" />


      <Input // Password
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#A04B5A' }}
        onChangeText={value => setPassowrd(value)}
        style={colorPrincipal.principal}
        borderColor={colorPrincipal.principal}
        secureTextEntry={true} />
        

      <Button // Login
        title="Entrar"
        icon={{ name: 'user', type: 'font-awesome', size: 15, color: 'white' }}
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(199, 43, 98, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

    </View>
  );
}

// Funções CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F10',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
});

const colorPrincipal = StyleSheet.create({
  principal: {color: '#A04B5A'}
  
});

const camposInput = StyleSheet.create({
  padrão: {
    marginLeft: '45px',
    marginRight: '45px'
  }
})
