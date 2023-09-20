import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import SignInScreen  from "./src/screens/SignInScreen";
import Register from "./src/screens/Register";
import Header from "./src/components/Header";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.header}>
        <Header />
        {/* <SignInScreen/> */}
        <Register/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    width: '100%',
  },
 
});

