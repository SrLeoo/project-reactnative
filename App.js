import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import { NavigationContainer } from '@react-navigation/native';
import bemVindo from './src/pages/bemVindo';

const Stack = createNativeStackNavigator();
export default function App() {

  const [cod, setCod] = useState(null)
  const [password, setPassowrd] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='bemVindo'
          component={bemVindo}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}