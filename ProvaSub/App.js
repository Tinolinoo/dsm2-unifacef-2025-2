import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DailyScreen from './src/screens/DailyScreen';
import WeeklyScreen from './src/screens/WeeklyScreen';

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
          name="Dia" 
          component={DailyScreen} 
          options={{ title: 'Compromissos do dia' }} 
        />
        <Stack.Screen 
          name="Semana" 
          component={WeeklyScreen} 
          options={{ title: 'Compromissos da semana' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}