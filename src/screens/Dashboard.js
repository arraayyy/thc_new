import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from "../components/Header";
import Home from './Home';
import { Button } from 'react-native-elements';


const Stack = createNativeStackNavigator();

const Dashboard = (props) => {
  const [profiles, setProfiles] = useState([
    { key: 1, name: 'Joan Cartilla', gender: "Female" },
    { key: 2, name: 'Roe Ann Codoy', gender: "Female" },
    { key: 3, name: 'Cahrl Loyloy', gender: "Male" },
    { key: 4, name: 'Marvin Navarro', gender: "Male" },
  ]);

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
                onPress={() => props.navigation.navigate("Home")}
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
    backgroundColor: '#E6EAE6',
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
    backgroundColor: '#9ED5C5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    fontSize: 35
  },
  iconName:{
    paddingVertical:5,
    color: '#9ED5C5',
    fontWeight: 'bold'
  }
})