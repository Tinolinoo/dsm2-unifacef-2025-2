import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import compromissosDia from '../data/compDia';

export default function DailyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateTitle}>11/11 (ter)</Text>
        <Text style={styles.subTitle}>Gabriel JustinoBrieto Vieira</Text>
        <Text style={styles.subTitle}>S.I</Text>
      </View>

      <FlatList
        data={compromissosDia}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.descr}</Text>
          </View>
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
    marginBottom: 30,
    marginTop: 10,
  },
  dateTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  itemContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  }
});