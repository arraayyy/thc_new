import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet,Pressable,Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import Dropdown from '../components/Dropdown';

let eduAt =[ {id:1, name:'Elementary Level'},{id:2,name:'Elementary Graduate'},{id:3,name:'Vocational'},{id:4,name:'High School Level'},{    id:5, name:' High School Graduate'},{id:6,name:'College Level '},{id:7,name:'College Graduate'},{id:8,name:'Graduate School'}]
let rel =[ {id:1, name:'Father'},{id:2,name:'Mother'},{id:3,name:'Child'},{id:4,name:'Guardian'}]


const AddProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
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
  const [showPicker, setShowPicker] = useState(false);
  const [male, setMale] = useState(false);
  const [female,setFemale] = useState(false);
  const [educAttainDis,seteducAttainDis] = useState(null);
  const [relationship, setrelationship] = useState('');
  const [relationshipDis, setrelationshipDis] = useState('');
  const [isResident, setIsResident] = useState(true);
 
   

  const handleSave = async () => {
    const accountId = await AsyncStorage.getItem('accountId');
    const requiredFields = [
         contactNo, firstName, lastName,
        relationship, gender, birthDate, birthPlace,
        educAttain, occupation, civilStatus, nationality, street, barangay,
        municipality, zipCode
      ];

      for (const field of requiredFields) {
        if (!field) {
          alert("Please fill in all fields.");
          return;
        }
      }
    if (accountId) {
        
      try {

        

        const profileData = {
          first_name: firstName,
          last_name: lastName,
          middle_name: middleName,
          birthDate: birthDate,
          birthPlace: birthPlace,
          civilStatus: civilStatus,
          occupation: occupation,
          gender: gender,
          relationship:relationship,
          nationality: nationality,
          educAttain: educAttain,
          contactNo: contactNo,
          street: street,
          barangay: barangay,
          municipality: municipality,
          zipCode: zipCode,
          user_type:"Resident",
        };
       
        const response = await axios.post(`/profile/addprofile/${accountId}`, profileData);

        if (response.status === 200) {
          alert('Profile Added Successfully');
          navigation.goBack(); 
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

 

  const genderMale=()=>{
    setMale(true);
    setFemale(false);
    setGender('Male');
  }

  const genderFemale=()=>{
    setMale(false);
    setFemale(true);
    setGender('Female');
  }

  const onEduSelect = (item) =>{
    setEducAttain(item.name);
    seteducAttainDis(item);

  }
  const onRelSelect = (item) =>{
    setrelationship(item.name);
    setrelationshipDis(item);

  }
  
  const setZipCodeValue = (value) => {
   
    if (!isNaN(value)) {
     setZipCode(value.toString()); 
    }else{
        alert("Must be a number.")
    }
  }

  const onResident =() =>{
    setIsResident(true);
    setBarangay("Talamban");
    setMunicipality("Cebu City");
    setZipCode('6000');
  }

  const nonResident =() =>{
    setIsResident(false);
    setBarangay('');
    setMunicipality('');
    setZipCode('');
  }
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

  const onCivilStatusSelect = (item) => {
    setCivilStatus(item.name);
    setCivilStatusDis(item);
  };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.title}>ADD PROFILE</Text>

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
            <View style={[{flexDirection: "row",paddingLeft: 35,}]}>
                <CheckBox title="MALE" center  checked={male} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderMale}/>
                <CheckBox title="FEMALE" center checked={female} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderFemale}/>
            </View>
            
            <Text style={styles.label}>Birth Date</Text>
            <TouchableOpacity // Open the date picker on touch
              style={styles.datePickerContainer}
              onPress={() => setShowPicker(true)}
            >
              <Text>{birthDate.toDateString()}</Text>
            </TouchableOpacity>
            {showPicker && (
              <DateTimePicker
              value={birthDate}
              mode="date"
              display="spinner"
              maximumDate={new Date()} // Set the maximum date to the current date
              onChange={(event, selectedDate) => {
                setShowPicker(false); // Close the date picker
                if (selectedDate) {
                  setBirthDate(selectedDate);
                }
              }}
            />
            )}

            <Text style={styles.label}>Birth Place</Text>
            <TextInput
            style={styles.input}
            value={birthPlace}
            onChangeText={(text) => setBirthPlace(text)}
            />

            <Text style={styles.label}>Educational Attainment</Text> 
            <View >
                <Dropdown 
                value={educAttainDis}
                    data ={eduAt}
                    onSelect={onEduSelect} 
                />
            </View>

            <Text style={styles.label}>Family Role</Text> 
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

         
            <Text style={styles.label}>Civil Status</Text>
              <Dropdown
                value={civilStatusDis}
                data={civilStatusOptions}
                onSelect={onCivilStatusSelect}
              />

            <Text style={styles.label}>Nationality</Text>
            <TextInput
            style={styles.input}
            value={nationality}
            onChangeText={(text) => setNationality(text)}
            />

            <Text style={styles.label}>House Number/Street/Sitio</Text>
            <TextInput
            style={styles.input}
            value={street}
            onChangeText={(text) => setStreet(text)}
            />
            
            <Text style={[styles.label,{paddingTop:20}]}>
              Are you a {isResident ? "Resident" : "Non-Resident"} of Barangay Talamban?
            </Text>
            <View style={styles.residentButtons}>
              <TouchableOpacity
                style={[
                  styles.residentButton,
                  isResident && styles.selectedButton,
                ]}
                onPress={() => onResident()}
              >
                <Text style={isResident ? styles.selectedText : [styles.buttonText,{color:"#15876C"}]}>
                  Resident
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.residentButton,
                  !isResident && styles.selectedButton,
                ]}
                onPress={() => nonResident()}
              >
                <Text style={!isResident ? styles.selectedText : [styles.buttonText,{color:"#15876C"}]}>
                  Non-Resident
                </Text>
              </TouchableOpacity>
            </View>

            {!isResident && (
              <>
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

            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              value={zipCode}
              onChangeText={(text) => setZipCodeValue(text)}
            />
              </>
            )}
            {/* <Text style={styles.label}>Barangay</Text>
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

            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              value={zipCode}
              onChangeText={(text) => setZipCodeValue(text)}
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
    datePickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#29C999',
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
    },
    residentButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 35,
      marginBottom: 10,
    },
    residentButton: {
      flex: 1,
      height: 40,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: "#15876C",
    },
    selectedButton: {
      backgroundColor: "#15876C",
    },
    
    selectedText: {
      fontSize: 16,
      color: "white",
    },
  });
  
  export default AddProfile;