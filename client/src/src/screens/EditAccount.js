import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';

const EditAcc = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSave = () => {
    // Handle the logic to save the form data here
    console.log('Form Data:', formData);
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.title}>EDIT PROFILE</Text>

        <View style={styles.formContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            />


            {/* Centered and Styled Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      color: '#9ED5C5',
      marginBottom: 20,
      textAlign: 'center',
    },
    formContainer: {
      flex: 1,
    },
    label: {
      fontSize: 16,
      color: '#1BC592',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#29C999',
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    backButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#29C999',
      borderRadius: 5,
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginHorizontal: 10,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 4,
    },
    backButtonText: {
      color: 'black',
      textAlign: 'center',
    },
    saveButton: {
      backgroundColor: '#29C999',
      borderRadius: 5,
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginHorizontal: 10,
    },
    saveButtonText: {
      color: 'white',
      textAlign: 'center',
    },
  });
  
  export default EditAcc;