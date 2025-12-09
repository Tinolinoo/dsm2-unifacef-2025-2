import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import compromissosSemana from '../data/compSemana';

export default function WeeklyScreen() {
  
  const sectionsAdaptadas = compromissosSemana.map(item => ({
    title: item.titulo,
    data: item.dados
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subTitle}>Gabriel Justino Brito Vieira</Text>
        <Text style={styles.subTitle}>S.I</Text>
      </View>

      <SectionList
        sections={sectionsAdaptadas}
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
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
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