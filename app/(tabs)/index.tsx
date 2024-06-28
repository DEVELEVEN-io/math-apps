// src/screens/HomeScreen.tsx

import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalculatorCard from '@/components/CalculatorCard'; // Adjust import path as per your project structure
import images from '@/constants/images';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const financialCalculatorData = [
    { name: "Investment Calculator", img: images.profit_80 },
    { name: "Salary Calculator", img: images.cash_80 },
    { name: "Interest Calculator", img: images.increase_80 },
  ];

  // Define other data arrays similarly for unit conversion, area calculation, time calculation, etc.

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
        {/* Render your CalculatorCard components here */}
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
