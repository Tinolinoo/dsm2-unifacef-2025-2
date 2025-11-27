import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';
import TeamScreen from './src/screens/TeamScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }} 
        />
        <Stack.Screen 
          name="User" 
          component={UserScreen} 
          options={{ title: 'Meus compromissos' }} 
        />
        <Stack.Screen 
          name="Team" 
          component={TeamScreen} 
          options={{ title: 'Compromissos da equipe' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}