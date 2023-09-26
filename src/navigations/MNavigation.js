import React, {useState} from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SignInScreen from "../screens/SignInScreen";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import Services from "../screens/Services";

import Prenatal from "../screens/Prenatal/Prenatal";
import PrenatalDetails from "../screens/Prenatal/PrenatalDetails";
import PrenatalSession from "../screens/Prenatal/PrenatalSession";

import FamilyPlanning from "../screens/FamilyPlanning/FamilyPlanning";
import FamilyPlanningDetails from "../screens/FamilyPlanning/FamilyPlanningDetails";
import FamilyPlanningAssessment from "../screens/FamilyPlanning/FamilyPlanningAssessment";

import MedicalCheckup from "../screens/MedicalCheckup/MedicalCheckup";
import MedicalCheckupDetails from "../screens/MedicalCheckup/MedicalCheckupDetails";


import Profile from "../screens/Profile";


const Stack = createNativeStackNavigator();

const MNavigation = () => {

  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            title: '',
            headerTintColor: "#44AA92",
            headerStyle:{
                backgroundColor: '#F2F2F2',
                color: "#88EECC",
                
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

            <Stack.Screen name="Prenatal" component={Prenatal} options={{headerShown: false}}/>
            <Stack.Screen name="Prenatal Results" 
                component={PrenatalDetails}
                options={{
                    title:"PRENATAL",
                    headerTintColor: "#FFF",
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: "#44AA92",
                    }
                }} />
            <Stack.Screen name="Prenatal Session" 
                component={PrenatalSession}
                options={{
                    title:"PRENATAL",
                    headerTintColor: "#FFF",
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: "#44AA92",
                    }
                }}/>

                <Stack.Screen name="Family Planning" component={FamilyPlanning} options={{headerShown: false}}/>
                 <Stack.Screen  name="Family Planning Details" component={FamilyPlanningDetails}
                        options={{
                            title:"FAMILY PLANNING",
                            headerTintColor: "#FFF",
                            headerTitleAlign: 'center',
                            headerStyle:{
                                backgroundColor: "#44AA92",
                            }
                        }} />
                <Stack.Screen name="Family Planning Assessment" component={FamilyPlanningAssessment}
                    options={{
                        title:"FAMILY PLANNING",
                        headerTintColor: "#FFF",
                        headerTitleAlign: 'center',
                        headerStyle:{
                            backgroundColor: "#44AA92",
                        }
                    }}/>

                <Stack.Screen name="Medical Checkup" component={MedicalCheckup} options={{headerShown: false}}/>
                <Stack.Screen  name="Medical Checkup Details" component={MedicalCheckupDetails}
                        options={{
                            title:"MEDICAL CHECKUP",
                            headerTintColor: "#FFF",
                            headerTitleAlign: 'center',
                            headerStyle:{
                                backgroundColor: "#44AA92",
                            }
                        }} />

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

