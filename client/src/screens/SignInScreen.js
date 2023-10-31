import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    try {
    const response = await axios.post('http://10.0.2.2:8001/account/login', {
      email, password
      
    });

    if(response.status === 200){
      alert("You have Successfully Logged In");

      navigation.navigate("Dashboard");
    }
  } catch (error) {
      console.log(error);
     
  }
  };

  return (
    <View style={{backgroundColor: '', minHeight:"100%", marginTop: 75}}>
      <Header height={150}/>
      <View style={styles.container}>  
        
        {/* Label for Email */}
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          setValue={setEmail}
        />
        
        {/* Label for Password */}
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          setValue={setPassword}
        />
        
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
      </View>
    </View>
    
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
    color: '#88EECC',
  },
});

export default SignInScreen;
