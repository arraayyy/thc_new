import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '',
    age: '',
    birthdate: '',
    educationalAttainment: '',
    occupation: '',
    contactNumber: '',
    nationality: '',
    profilePassword: '',
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
            <Text style={styles.label}>First Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            />

            <Text style={styles.label}>Middle Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, middleName: text })}
            />

            <Text style={styles.label}>Gender</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, gender: text })}
            />

            <Text style={styles.label}>Age</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, age: text })}
            />

            <Text style={styles.label}>Birthdate</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, birthdate: text })}
            />

            <Text style={styles.label}>Educational Attainment</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) =>
                setFormData({ ...formData, educationalAttainment: text })
            }
            />

            <Text style={styles.label}>Occupation</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, occupation: text })}
            />

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) =>
                setFormData({ ...formData, contactNumber: text })
            }
            />

            <Text style={styles.label}>Nationality</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, nationality: text })}
            />

            <Text style={styles.label}>Profile Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(text) =>
                setFormData({ ...formData, profilePassword: text })
            }
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
  
  export default EditProfile;