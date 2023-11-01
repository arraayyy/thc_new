import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import Header from "../components/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    getProfiles();
    
},[])

  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
    console.log("accountId",acctId);
    const response = await axios.get(`http://10.0.2.2:8001/account/fetchmember/${acctId}`); 
    console.log(response.data.profile);
  }

  const fetchProfile = (user) => {
    AsyncStorage.setItem('UserName', user.name);
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Header height={150}/>
      <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <FlatList 
            numColumns={2}
            columnWrapperStyle = {{ justifyContent: 'space-evenly', marginBottom: 20}}
            keyExtractor={(item) => item.key}
            data={profiles}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => fetchProfile(item)}
                style={styles.profileContainer}>
                  <View style={styles.profileIconContainer}>
                    <Icon style={styles.icon} name='user-alt' size={15} color='#E0E2E1' />
                  </View>
                  <Text numberOfLines={1} style={styles.iconName}>{item.name}</Text>
              </TouchableOpacity>
              
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

const width = Dimensions.get('window').width -40;
const styles = StyleSheet.create({
  container: { 
    borderTopWidth: 1,
    paddingTop:50,
    borderTopColor: '#000',
    marginVertical: 25,
    width: width,
  },
  profileContainer: {
    paddingTop: 5,
    backgroundColor: '#E6EDED',
    width: 130,
    height: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileIconContainer:{
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: '#44AA92',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    fontSize: 35
  },
  iconName:{
    paddingVertical:5,
    color: '#44AA92',
    fontWeight: 'bold'
  }
})