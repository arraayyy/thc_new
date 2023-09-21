import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from '../components/Header'

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
    <SafeAreaView>
        <Header height={80}/>
        <View style={{alignItems: 'center'}}>
            <View style={styles.container} numColumns={2}>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.profileContainer}>
                    <View style={styles.profileIconContainer}>
                    <Icon style={styles.icon} name='user-alt' size={15} color='#E0E2E1' />
                    </View>
                    <Text numberOfLines={1} style={styles.iconName}></Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})