import React, {useState} from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SignInScreen from "../screens/SignInScreen";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Services from "../screens/Services";
import Navigation from "./Navigation";

import Prenatal from "../screens/Prenatal/Prenatal";
import PrenatalDetails from "../screens/Prenatal/PrenatalDetails";

import Profile from "../screens/Profile";


const Stack = createNativeStackNavigator();

const MNavigation = () => {

  return (
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
            <Stack.Screen name="Dashboard" component={Dashboard} options={{
            }} />

            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Services" component={Services}/>

            <Stack.Screen name="Prenatal" component={Prenatal} />
            <Stack.Screen name="Prenatal Results" component={PrenatalDetails} />

            <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}

export default MNavigation

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88EECC', 
    width: '100%',
  },
 
});

