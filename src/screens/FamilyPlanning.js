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
        <Text style={styles.pageTitle}>MY FAMILY PLANNING RECORDS</Text>

        {/* Table */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Examination #</Text>
            <Text style={styles.tableHeader}>Doctor</Text>
            <Text style={styles.tableHeader}>Date</Text>
          </View>

          {/* Table Data */}
          {/* You can map your data and create rows here */}
        </View>
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
  table: {
    borderWidth: 1,
    borderColor: '#88EECC',
  
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#88EECC',
    borderTopLeftRadius: 10, // Rounded top-left corner
    borderTopRightRadius: 10, // Rounded top-right corner
    overflow: 'hidden', // Clip the content inside the rounded border
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#88EECC',
  },
  tableHeader: {
    color: 'white',
    fontWeight: 'bold',
  },
  // You can add more styles for table data rows as needed
});

export default FamilyPlanning;
