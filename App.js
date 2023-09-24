import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";
import SignInScreen from "./src/screens/SignInScreen"
import Register from "./src/screens/Register";
import MainNavigationContainer from "./src/components/MNavigationContainer";
import FamilyPlanning from "./src/screens/FamilyPlanning";
import Services from "./src/screens/Services";
import Prenatal from "./src/screens/Prenatal/Prenatal";
import PrenatalDetails from "./src/screens/Prenatal/PrenatalDetails";
import PrenatalSession from "./src/screens/Prenatal/PrenatalSession";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        title: '',
        headerStyle:{
          backgroundColor: '#F2F2F2',
          color: "#88EECC"
        },
        headerShadowVisible: false,
        statusBarStyle: "dark",
        headerShadowVisible: false,
      }}>
        <Stack.Screen name="Login" component={SignInScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Prenatal" component={Prenatal} options={{headerShown: false}} />
        <Stack.Screen name="Prenatal Results" component={PrenatalDetails} />
        <Stack.Screen name="Prenatal Session" component={PrenatalSession} />
      </Stack.Navigator>
   </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88EECC', 
    width: '100%',
  },
 
});

