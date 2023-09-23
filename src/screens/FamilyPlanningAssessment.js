import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use a different icon library if you prefer
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const FamilyPlanning = () => {
  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="ios-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appBarText}>FAMILY PLANNING</Text>
      </View>

      {/* Page Body */}
      <View style={styles.pageBody}>
        <Text style={styles.pageTitle}>MY FAMILY PLANNING RECORD # ASSESSMENT #</Text>

       
      </View>
    <Footer />
     {/* <Navigation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBar: {
    backgroundColor: '#8EC3B0',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },
  backButton: {
    padding: 10,
  },
  appBarText: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  pageBody: {
    padding: 20,
  },
  pageTitle: {
    color: '#8EC3B0',
    fontSize: 18,
    marginBottom: 20,
  },
 
  // You can add more styles for table data rows as needed
});

export default FamilyPlanning;
