// src/components/CalculatorCard.tsx
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface CalculatorCardProps {
  dataItems: { name: string; img: any }[];
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ dataItems }) => {
  return (
    <View style={styles.container}>
      {dataItems.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.img} style={styles.cardImage} />
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#333', // Dark background color
    padding: 16, // Add padding for spacing
  },
  card: {
    alignItems: 'center',
    width: '40%', // Adjust as per your design
    marginBottom: 16,
    backgroundColor: '#444', // Darker card background color
    borderRadius: 8,
    padding: 12, // Add padding for spacing inside the card
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardText: {
    color: '#fff', // White text color for readability on dark background
    textAlign: 'center', // Center the text inside the card
    marginTop: 8, // Add spacing between image and text
  },
});

export default CalculatorCard;
