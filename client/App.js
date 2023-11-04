import React, {useState} from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MNavigation from "./src/navigations/MNavigation";
import axios from "axios";

axios.defaults.baseURL = "https://talambanhealthconnectserver.onrender.com"

export default function App() {

  return (
    <NavigationContainer>
      <MNavigation />
   </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88EECC', 
    width: '100%',
  },
 
});

