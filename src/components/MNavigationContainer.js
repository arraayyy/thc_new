import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Navigation from '../navigations/Navigation'
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import SignInScreen from "../screens/SignInScreen"
import Register from "../screens/Register";
import Services from "../screens/Services";

const Stack = createNativeStackNavigator();

const MNavigationContainer = () => {
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
           headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Home" component={Navigation} />
        <Stack.Screen name="Services" component={Navigation} />

      </Stack.Navigator>
  )
}

export default MNavigationContainer

const styles = StyleSheet.create({})