import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditAcc = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [updateStatus, setUpdateStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    getAccountDetails();
  }, [updateStatus]);

  useEffect(() => {
    if (updateStatus) {
      // Reload the screen
      navigation.replace('Profile');
    }
  }, [updateStatus, navigation]);
  
  const handlePasswordChange = (text) => {
    setFormData({ ...formData, password: text });
    setIsPasswordValid(PasswordValid(text));
  };

  const PasswordValid = (password) => {
    // Regular expression to enforce password requirements (e.g., minimum length, special characters)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const getAccountDetails = async () => {
    try {
      const accId = await AsyncStorage.getItem('accountId'); // Replace with the actual account ID

      // Fetch the current account details
      const response = await axios.get(`/account/specaccount/${accId}`);

      if (response.status === 200) {
        // Populate the form fields with the retrieved values
        setFormData({
          email: response.data[0].email,
          password: response.data[0].password, // Set the password from the response
        });
        
        
      } else {
        console.log('Failed to fetch account details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
   console.log("valid",isPasswordValid);
  const handleSave = async () => {
    if(isPasswordValid){
    try {
      const { email, password } = formData;
      const accId = await AsyncStorage.getItem('accountId'); // Replace with the actual account ID

      // Send a PUT request to update the email and password
      const response = await axios.put(`/account/update/${accId}`, {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Account updated successfully');
        setUpdateStatus(Date.now());
      } else {
        console.log('Failed to update account');
      }
    } catch (error) {
      console.error('Error:', error);
    }}
  };

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>EDIT ACCOUNT</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            value={formData.email} // Control the input value
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <View style={styles.passwordInput}>
              <TextInput
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                value={formData.password}
              />
            </View>
            <View style={styles.passwordIcon}>
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={20}
                  color="#1BC592"
                />
              </TouchableOpacity>
            </View>
          </View>
            
          <Text style={[styles.passwordRequirement,{fontWeight:'bold'}]}>
              NOTE : Password Requirement
          </Text>
          <Text style={styles.passwordRequirement}>
            {'\u2022'} Minimum 8 characters
          </Text>
          <Text style={styles.passwordRequirement}>
            {'\u2022'} At least one uppercase letter
          </Text>
          <Text style={styles.passwordRequirement}>
            {'\u2022'} At least one lowercase letter
          </Text>
          <Text style={styles.passwordRequirement}>
            {'\u2022'} At least one digit
          </Text>
          <Text style={styles.passwordRequirement}>
            {'\u2022'} At least one special character 
          </Text>
          <Text style={[styles.passwordRequirement,{paddingBottom:20}]}>
            {'\u2022'} No spaces 
          </Text>
          
          {!isPasswordValid && (
            <Text style={styles.passwordErrorMessage}>
              Password is invalid! Please follow the Password Requirements.
            </Text>
          )}

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
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#29C999',
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
    },
    passwordInput: {
      flex: 1,
    },
    passwordIcon: {
      marginLeft: 10,
    },
    passwordRequirement: {
      color: '#AEAEAE',
      fontSize: 12,
      paddingLeft: 35,
    },
    passwordErrorMessage: {
      color: 'red',
      marginBottom: 10,
      fontSize: 14,
    },
  });
  
  export default EditAcc;