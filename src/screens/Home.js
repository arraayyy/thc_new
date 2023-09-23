import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from '../components/Header'

const Stack = createNativeStackNavigator();

const Home = ({route}) => {
    return (
    <SafeAreaView>
        <Header height={80}/>
        <View style={{alignItems: 'center'}}>
            <View style={styles.greetingOuterContainer}>
                <View style={styles.greetingInnerContainer}>
                    <Text 
                        numberOfLines={1} 
                        style={styles.greetingText}>Hello {route.params.name}</Text>
                    <Text 
                        numberOfLines={2} 
                        style={styles.greetingText}>Welcome To Talamban Health Connect Access Our Services</Text>
                </View>
            </View>
            <View style={styles.container} numColumns={2}>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.homeContainer}>
                    <View>
                    <Icon style={styles.icon} name='briefcase-medical' size={15} color='#E0E2E1' />
                    </View>
                    <Text numberOfLines={1} style={styles.iconName}>SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {}}
                style={styles.homeContainer}>
                    <View>
                    <Icon style={styles.icon} name='user-alt' size={15} color='#E0E2E1' />
                    </View>
                    <Text numberOfLines={1} style={styles.iconName}>SERVICES</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Home

const width = Dimensions.get('window').width -40;
const styles = StyleSheet.create({
    greetingOuterContainer:{
        marginTop:20,
        paddingTop: 20,
        borderTopWidth: 0.5,
        borderColor: '#000'
    },  
    greetingInnerContainer:{
        width:width-50,
        backgroundColor: "#9ED5C5",
        padding: 20,
        borderRadius: 20,
    },
    greetingText:{
        color: '#FFF'
    },
    container: { 
        paddingTop:50,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      homeContainer: {
        paddingTop: 5,
        backgroundColor: '#E6EAE6',
        width: 130,
        height: 110,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      icon:{
        fontSize: 65,
        color: '#9ED5C5'
      },
      iconName:{
        paddingVertical:5,
        color: '#9ED5C5',
        fontWeight: 'bold'
      }
})