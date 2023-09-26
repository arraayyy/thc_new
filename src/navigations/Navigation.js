import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome5'


// Screens
import Home from '../screens/Home'
import Services from '../screens/Services'
import Profile from '../screens/Profile'

const homeScreenName = 'Home Tab';
const servicesScreenName = "Services";
const profileScreenName = "Profile";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator 
        initialRouteName={Home}
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let rn= route.name;

                if(rn === homeScreenName){
                    color = focused ? "#6DFFD3" : '#E6F5EE'
                    return <Icon name='home' size={size} color={color}/>
                } else if(rn === servicesScreenName){
                    color = focused ? "#6DFFD3" : '#E6F5EE'
                    return <Icon name='briefcase-medical' size={size} color={color} />
                } else {
                    color = focused ? "#6DFFD3" : '#E6F5EE'
                    return <Icon name='user-alt' size={size} color={color} />
                } 
            },
            tabBarActiveTintColor: '#6DFFD3',
            tabBarInactiveTintColor: '#E6F5EE',
            tabBarStyle: {
                backgroundColor: '#9ED5C5',
                paddingTop: 10,
            }
        })}
    >
        <Tab.Screen name={homeScreenName} component={Home} />
        <Tab.Screen name={servicesScreenName} component={Services} />
        <Tab.Screen name={profileScreenName} component={Profile} />
        
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10
    }
})