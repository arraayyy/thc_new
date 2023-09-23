import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate("Dashboard");
  };

  return (
    <View style={{backgroundColor: '', minHeight:"100%"}}>
      <Header height={150}/>
      <View style={styles.container}>  
        
        {/* Label for Email */}
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        
        {/* Label for Password */}
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <View style={styles.accTextContainer}>
          <Text style={styles.accText}>Don't have an account? </Text>
          <Text 
            style={styles.signUpText}
            onPress={() => navigation.navigate("Register")} >Sign Up</Text>
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
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#88EECC',
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
