import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import axios from 'axios';

const Home = () => {
    const [userName, setUserName] = useState();
    const navigation = useNavigation();
    const [profStatus, setProfStatus] = useState(''); // initial state
    const route = useRoute();
    const profileId = route.params?.profileId;


    const fetchName = async () => {
        var name = await AsyncStorage.getItem('UserName') || 'as';
        setUserName(name);
    }

    useEffect(() => {
        fetchName();
        fetchProfStatus();
        
    },[]);
    
    const fetchProfStatus = async () => {
        try{
            var profId = await AsyncStorage.getItem('ProfileId')
            const response = await axios.get('/profile/' + profId);
            setProfStatus(response.data.prof_status);
        } catch(error){
            console.log('Error fetching prof_status:', error);
        }
    }
    
    return (
        <SafeAreaView>
          <Header height={80} />
          <View style={{ alignItems: 'center' }}>
            <View style={styles.greetingOuterContainer}>
              <View style={styles.greetingInnerContainer}>
                <Text
                  numberOfLines={1}
                  style={styles.greetingText}>Hello {userName}</Text>
                <Text
                  numberOfLines={2}
                  style={styles.greetingText}>Welcome To Talamban Health Connect Access Our Services</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              {profStatus === 'Active' && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Services")}
                  style={styles.inlineContainer}>
                  <View>
                    <Icon style={styles.icon} name='briefcase-medical' size={15} color='#15876C' />
                  </View>
                  <Text numberOfLines={1} style={styles.iconName}>SERVICES</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={styles.inlineContainer}>
                <View>
                  <Icon style={styles.icon} name='user-alt' size={15} color='#15876C' />
                </View>
                <Text numberOfLines={1} style={styles.iconName}>PROFILE</Text>
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
        backgroundColor: "#44AA92",
        padding: 20,
        borderRadius: 20,
    },
    greetingText:{
        color: '#DDFFF7'
    },
    container: { 
        paddingTop:50,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      homeContainer: {
        paddingTop: 5,
        backgroundColor: '#E6EDED',
        width: 130,
        height: 110,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      icon:{
        fontSize: 65,
        color: '#44AA92'
      },
      iconName:{
        paddingVertical:5,
        color: '#44AA92',
        fontWeight: 'bold'
      },
      rowContainer: {
        paddingTop: 50,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      inlineContainer: {
        paddingTop: 5,
        backgroundColor: '#E6EDED',
        width: 130,
        height: 110,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
})