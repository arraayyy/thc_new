import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dropdown from '../components/Dropdown'

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date()); // Initialize birthDate with a Date object
  const [birthPlace, setBirthPlace] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [civilStatusDis, setCivilStatusDis] = useState(null);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [educAttain, setEducAttain] = useState('');
  const [occupation, setOccupation] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [street, setStreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [relationship, setrelationship] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [educAttainDis,seteducAttainDis] = useState(null);
  const [relationshipDis, setrelationshipDis] = useState(''); // To toggle date picker visibility

  

  useEffect(() => {
    initialProfileInfo();
  }, [updateStatus]);

  useEffect(() => {
    if (updateStatus) {
      // Reload the screen
      navigation.replace('Profile');
    }
  }, [updateStatus, navigation,]);

  useEffect(() => {
    if(civilStatus) {
      onCivilStatusSelect({ name: civilStatus });
    }
  }, [civilStatus]);

  const initialProfileInfo = async () => {
    const profId = await AsyncStorage.getItem('ProfileId');

    try {
      const response = await axios.get(`/profile/${profId}`);
      const profileData = response.data;
      setFirstName(profileData.first_name);
      setLastName(profileData.last_name);
      setMiddleName(profileData.middle_name);
      setBirthDate(new Date(profileData.birthDate)); // Format the date from the server
      setBirthPlace(profileData.birthPlace);
      const initialCivilStatus = civilStatusOptions.find(
        (status) => status.name === profileData.civilStatus
      );
      setCivilStatusDis(initialCivilStatus);
      setCivilStatus(profileData.civilStatus);
      const initialRelationship = rel.find(
        (relationship) => relationship.name === profileData.relationship
      );
      setrelationshipDis(initialRelationship);  
      setrelationship(profileData.relationship);
      setGender(profileData.gender);
      setNationality(profileData.nationality);
      const initialEducAttain = eduAt.find(
        (attain) => attain.name === profileData.educAttain
      );
      seteducAttainDis(initialEducAttain);
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
        // Format the selected date to a string in the desired format
        const formattedDate = `${birthDate.getFullYear()}-${(birthDate.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${birthDate.getDate().toString().padStart(2, '0')}`;

        const updatedData = {
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          birthDate: formattedDate,
          birthPlace: birthPlace,
          civilStatus: civilStatus,
          occupation: occupation,
          gender: gender,
          nationality: nationality,
          educAttain: educAttain,
          contactNo: contactNo,
          street: street,
          barangay: barangay,
          municipality: municipality,
          zipCode: zipCode,
          relationship:relationship,
        };

        const response = await axios.patch(`/profile/updateprofile/${profId}`, updatedData);

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

  const civilStatusOptions = [
    { id: 1, name: 'Single' },
    { id: 2, name: 'Married' },
    { id: 3, name: 'Divorced' },
    { id: 4, name: 'Widowed' },
    { id: 5, name: 'Separated' },
    // Add more civil status options as needed
  ];
  let eduAt =[ 
    {id:1, name:'Elementary Level'},
    {id:2,name:'Elementary Graduate'},
    {id:3,name:'Vocational'},
    {id:4,name:'High School Level'},
    { id:5, name:' High School Graduate'},
    {id:6,name:'College Level '},
    {id:7,name:'College Graduate'},
    {id:8,name:'Graduate School'}]
   let rel =[ {id:1, name:'Father'},{id:2,name:'Mother'},{id:3,name:'Child'},{id:4,name:'Guardian'}]
  const onCivilStatusSelect = (item) => {
    setCivilStatus(item.name);
    setCivilStatusDis(item);
  };
  const onEduSelect = (item) =>{
    setEducAttain(item.name);
    seteducAttainDis(item);

  }
  const onRelSelect = (item) =>{
    setrelationship(item.name);
    setrelationshipDis(item);

  }
  
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
          <TouchableOpacity // Open the date picker on touch
            style={styles.datePickerContainer}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{birthDate.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker // Conditionally render the date picker
              value={birthDate}
              mode="date"
              display="spinner"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false); // Close the date picker
                if (selectedDate) {
                  setBirthDate(selectedDate);
                }
              }}  
            />
          )}

          <Text style={styles.label}>Civil Status</Text>
              <Dropdown
                value={civilStatusDis}
                data={civilStatusOptions}
                onSelect={onCivilStatusSelect}
              />

        < Text style={styles.label}>Educational Attainment</Text> 
            <View >
                <Dropdown 
                value={educAttainDis}
                    data ={eduAt}
                    onSelect={onEduSelect} 
                />
            </View>

            <Text style={styles.label}>Relationship</Text> 
                <View >
                    <Dropdown 
                    value={relationshipDis}
                        data ={rel}
                        onSelect={onRelSelect} 
                    />
                </View> 


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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#29C999',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  birthdateText: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
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
