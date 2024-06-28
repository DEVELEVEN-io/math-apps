import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalculatorCard from '@/components/CalculatorCard';
import icons from '../../constants/icons'; // Adjust the path based on your project structure

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const financialCalculatorData = [
    { name: "Investment Calculator", img: icons.calculator_80 },
    { name: "Salary Calculator", img: icons.calculator_80 },
    { name: "Interest Calculator", img: icons.calculator_80 },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.searchContainer}>
        <ThemedText type="title">Math Apps</ThemedText>
        <ThemedText type="subtitle">Explore Apps</ThemedText>

        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#fff"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </ThemedView>

      <ThemedView style={styles.cardsContainer}>
        <CalculatorCard dataItems={financialCalculatorData} />
        {/* Render other CalculatorCard components for different data arrays */}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333', // Adjust as per your theme
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchBar: {
    color: '#fff',
    borderColor: '#CCC',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust as per your layout needs
  },
});
