import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


const SignInScreen = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigation = useNavigation();

  const handleLogin = async () => {
  
    // console.log('loginEmail:', loginEmail);
    //  console.log('loginPassword:', loginPassword);
    
    const requiredFields = [
      loginEmail, loginPassword
    ];
  
    for (const field of requiredFields) {
      if (!field) {
        alert("Please fill in all fields.");
        return;
      }}
    try {
      console
      const response = await axios.post('/account/loginresident', { loginEmail, loginPassword });

      if (response.data.accountId) {    
        alert("You have Successfully Logged In");
        await AsyncStorage.setItem("accountId", response.data.accountId);
        setloginEmail("");
        setloginPassword("");
        navigation.navigate('Dashboard');
       
      } else {
        alert(response.data);
        console.log(response.data)
      }
    
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <ScrollView>
    <View style={{backgroundColor: '', minHeight:"100%", marginTop: 75}}>
      <Header height={150}/>
      <View style={styles.container}>  
        
        {/* Label for loginEmail */}
        
        <View style={styles.inputContainer}>
          <Text style={[styles.label, { color: '#AEAEAE' }]}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setloginEmail(text)}
            value={loginEmail}
            setValue={setloginEmail}
          />
        </View>
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Password</Text>
        <View style={[styles.inputContainer, styles.passwordContainer]}>          
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            onChangeText={text => setloginPassword(text)}
            value={loginPassword}
            setValue={setloginPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#AEAEAE"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <View style={styles.accTextContainer}>
          <Text style={styles.accText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accTextContainer}>
        <Text style={styles.accText}>
          Learn what steps are needed to be taken.
        </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Contacts")}>
              <Text style={[styles.signUpText,{ color: '#FF5733' }]}>Get Support</Text>
          </TouchableOpacity>
        </View>
      </View>
     </View> 
     </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 35,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '80%', // Set the width of the button container to 80%
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#15876C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  accTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  accText: {
    fontSize: 14,
    color: '#AEAEAE',
  },
  signUpText: {
    fontSize: 14,
    color: '#6EC1B1',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 10,
    marginLeft:37,
    width: '80%',
    
  },
  passwordInput: {
    flex: 1,
    height: 40,
    
    },
  
});

export default SignInScreen;
