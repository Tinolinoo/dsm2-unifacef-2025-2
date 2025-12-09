import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.subtitle}>Gabriel Justino Brito Vieira</Text>
      <Text style={styles.subtitle}>S.I</Text>
      
      
      <View style={styles.buttonsGroup}>
        
    
        <View style={styles.buttonSpacing}>
          <Button 
            title="COMPROMISSOS DO DIA" 
            onPress={() => navigation.navigate('Dia')}
          />
        </View>
        
        
        <View>
          <Button 
            title="COMPROMISSOS DA SEMANA" 
            onPress={() => navigation.navigate('Semana')}
          />
        </View>

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
  buttonsGroup: {
    marginTop: 40, 
    width: '80%',  
  },

});