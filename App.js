import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import SignInScreen  from "./src/screens/SignInScreen";
import Register from "./src/screens/Register";
import Header from "./src/components/Header";
import Navigation from "./src/components/Navigation";
import Home from "./src/screens/Home";
import MainNavigationContainer from "./src/components/MainNavigationContainer";

export default function App() {

  return (
    <View style={styles.container}>
    {/* <SafeAreaView style={styles.container}> */}
      {/* <ScrollView style={styles.header}> */}
        {/* <Header /> */}
        {/* <SignInScreen/> */}
        <Register/>
        {/* <MainNavigationContainer /> */}
      {/* </ScrollView> */}
      {/* <StatusBar style="auto" /> */}
    {/* </SafeAreaView> */}
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

