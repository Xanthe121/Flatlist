// HelloScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HelloScreen({ route }) {
  // Get the data passed from HomeScreen
  const { passProps } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Details</Text>
      
      {passProps && (
        <>
          <Image 
            source={passProps.imagePath} 
            style={styles.petImage}
          />
          
          <Text style={styles.name}>{passProps.note}</Text>
          <Text style={styles.date}>Date: {passProps.date}</Text>
          <Text style={styles.status}>Status: {passProps.status}</Text>
          <Text style={styles.id}>ID: {passProps.id}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  petImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  id: {
    fontSize: 16,
    color: '#999',
  },
});