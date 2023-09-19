import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignInScreen  from "./src/screens/SignInScreen";
import Header from "./src/components/Header";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <SignInScreen/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    width: '100%',
  },
 
});

