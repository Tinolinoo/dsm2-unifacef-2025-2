import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>
      <Text style={styles.subtitle}>Gabriel Justino</Text>
      <Text style={styles.subtitle}>S.I</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Meus compromissos" 
          onPress={() => navigation.navigate('User')}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Compromissos da equipe" 
          onPress={() => navigation.navigate('Team')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  }
});