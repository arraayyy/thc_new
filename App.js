import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";
import SignInScreen from "./src/screens/SignInScreen"
import MainNavigationContainer from "./src/components/MNavigationContainer";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // <View style={styles.container}>
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.header}>
    //     {/* <Header /> */}
    //     {/* <SignInScreen/> */}
    //     {/* <Register/> */}
    //     {/* <MNavigationContainer /> */}
    //     <Dashboard />
    //   </ScrollView>
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    width: '100%',
  },
 
});

