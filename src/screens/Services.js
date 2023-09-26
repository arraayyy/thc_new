import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../components/Header'
const Services = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'', height:height}}>
      <Header height={80}/>
      <View style={{alignItems: 'center'}}>
          <View style={styles.header}/>
          <View >
            {/* <Icon name="briefcase-medical" size={50} color="#9ED5C5" /> */}
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Prenatal</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Immunization</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Family Planning")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Family Planning</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Dental</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Medical Check-up</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Hematology Test</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Prenatal")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Urinalysis Test</Text>
                </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Services
const width = Dimensions.get('window').width -40;
const height = Dimensions.get('window').height -40;
const styles = StyleSheet.create({
   header:{
    marginTop:20,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#000',
    width:width-50,
  }, 
  container: { 
    paddingTop:2,
  },
  servButton: {
    paddingTop: 5,
    backgroundColor: '#F9F9F9',
    width: 200,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:0.5,
    borderColor:'black'
  }, 
  servText:{
    paddingVertical:5,
    color: '#9ED5C5',
    fontWeight: 'bold'
  }
})