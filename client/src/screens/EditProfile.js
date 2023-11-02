import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [educAttain, setEducAttain] = useState('');
  const [occupation, setOccupation] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [street, setStreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [updateStatus, setUpdateStatus] = useState('');


  useEffect(() => {
    initialProfileInfo();
  }, [updateStatus]); // Add updateStatus to the dependency array
  
  useEffect(() => {
    if (updateStatus) {
      // Reload the screen
      navigation.replace('Profile');
    }
  }, [updateStatus, navigation]);
  

  const initialProfileInfo = async () => {
    const profId = await AsyncStorage.getItem('ProfileId');

    try {
      const response = await axios.get(`http://10.0.2.2:8001/profile/${profId}`);
      const profileData = response.data;
      setFirstName(profileData.first_name);
      setLastName(profileData.last_name);
      setMiddleName(profileData.middle_name);
      setBirthDate(profileData.birthDate);
      setBirthPlace(profileData.birthPlace);
      setCivilStatus(profileData.civilStatus);
      setGender(profileData.gender);
      setNationality(profileData.nationality);
      setEducAttain(profileData.educAttain);
      setOccupation(profileData.occupation);
      setContactNo(profileData.contactNo);
      setStreet(profileData.street);
      setBarangay(profileData.barangay);
      setMunicipality(profileData.municipality);
      setZipCode(String(profileData.zipCode));

    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async () => {
    const profId = await AsyncStorage.getItem('ProfileId');

    if (profId) {
      try {
        const updatedData = {
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          birthDate: birthDate,
          birthPlace: birthPlace,
          civilStatus: civilStatus,
          gender: gender,
          nationality: nationality,
          educAttain: educAttain,
          contactNo: contactNo,
          street: street,
          barangay: barangay,
          municipality: municipality,
          zipCode: zipCode,
        };

        const response = await axios.patch(`http://10.0.2.2:8001/profile/updateprofile/${profId}`, updatedData);

        if (response.status === 200) {
          alert('Profile Updated Successfully');
          setUpdateStatus(Date.now());
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigation = useNavigation(); 

  const handleBack = () => {
    navigation.goBack(); 
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.title}>EDIT PROFILE</Text>

        <View style={styles.formContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            />

            <Text style={styles.label}>Middle Name</Text>
            <TextInput
            style={styles.input}
            value={middleName}
            onChangeText={(text) => setMiddleName(text)}
            />

            <Text style={styles.label}>Gender</Text>
            <TextInput
            style={styles.input}
            value={gender}
            onChangeText={(text) => setGender(text)}
            />

            <Text style={styles.label}>Birthdate</Text>
            <TextInput
            style={styles.input}
            value={birthDate}
            onChangeText={(text) => setBirthDate(text)}
            />

            <Text style={styles.label}>Educational Attainment</Text>
            <TextInput
            style={styles.input}
            value={educAttain}
            onChangeText={(text) => setEducAttain(text)}
            />

            <Text style={styles.label}>Occupation</Text>
            <TextInput
            style={styles.input}
            value={occupation}
            onChangeText={(text) => setOccupation(text)}
            />

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
            style={styles.input}
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
            />

            <Text style={styles.label}>Nationality</Text>
            <TextInput
            style={styles.input}
            value={nationality}
            onChangeText={(text) => setNationality(text)}
            />

            <Text style={styles.label}>Street</Text>
            <TextInput
            style={styles.input}
            value={street}
            onChangeText={(text) => setStreet(text)}
            />

            <Text style={styles.label}>Barangay</Text>
            <TextInput
            style={styles.input}
            value={barangay}
            onChangeText={(text) => setBarangay(text)}
            />

            <Text style={styles.label}>Municipality</Text>
            <TextInput
            style={styles.input}
            value={municipality}
            onChangeText={(text) => setMunicipality(text)}
            />

            <Text style={styles.label}>Zipcode</Text>
            <TextInput
              style={styles.input}
              value={zipCode}
              onChangeText={(text) => setZipCode(text)}
            />


            {/* <Text style={styles.label}>Profile Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(text) =>
                setFormData({ ...formData, profilePassword: text })
            }
            /> */}

            {/* Centered and Styled Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
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