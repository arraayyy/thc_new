import React, {useState} from "react";
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MNavigationContainer from "./src/components/MNavigationContainer";


export default function App() {

  return (
    <NavigationContainer>
      <MNavigationContainer />
   </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88EECC', 
    width: '100%',
  },
 
});

