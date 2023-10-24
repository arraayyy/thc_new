import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from "../components/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([
    { key: 1, name: 'Joan Cartilla', gender: "Female" },
    { key: 2, name: 'Roe Ann Codoy', gender: "Female" },
    { key: 3, name: 'Cahrl Loyloy', gender: "Male" },
    { key: 4, name: 'Marvin Navarro', gender: "Male" },
  ]);

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