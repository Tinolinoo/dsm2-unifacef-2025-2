import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const sections = [
  {
    title: '(Fausto)',
    data: [
      '09:30 Reunião "Daily"',
      '14:00 Reunião com cliente Carros & Carros',
      '16:30 Prazo final Projeto X'
    ],
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09:30 Reunião "Daily"',
      '12:00 Almoço com a diretoria',
      '15:00 Saída viagem'
    ],
  },
  {
    title: 'Aderbal',
    data: [
      '09:30 Reunião "Daily"',
      '13:30 Visita técnica Uni-FACEF',
      '16:30 Prazo final Projeto X'
    ],
  },
];

export default function TeamScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subTitle}>Gabriel Justino</Text>
        <Text style={styles.subTitle}>S.I</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginTop: 15,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  }
});