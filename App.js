import React, {useState} from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MNavigation from "./src/navigations/MNavigation";



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

