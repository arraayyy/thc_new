import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use a different icon library if you prefer
import Footer from '../../components/Footer.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import servicesHome from '../../styles/ServicesHome.js';

const Hematology = () => {
  const navigation = useNavigation();
  let exams =[
    {
      examID:1, 
      doc:"Dr.Doe", 
      date:'01-23-2023'
    },
    {
      examID:2, 
      doc:"Dr.Jane", 
      date:'02-24-2023'
    },
  ];
  return (
    <View style={servicesHome.container}>
      <ScrollView>
      <View style={servicesHome.body}>
        <View style={servicesHome.headerContainer}>
          {/* Table Header */}
          <View style={servicesHome.header}>
            <Text style={servicesHome.title}>MY HEMATOLOGY RECORDS</Text>
          </View>

          {/* Table Data */}
         
          
           {exams.map((value,indx)=>{
              return(
                <Card containerStyle={servicesHome.card}>
                <TouchableOpacity onPress={()=> navigation.navigate("Hematology Details", value)}>
                  <View style={{flexDirection:'row'}}>
                    <View>
                      <Text style={[servicesHome.cardRow, {fontSize:20, fontWeight:'bold'}]}>Examination {value.examID}</Text>
                      <Text style={[servicesHome.cardRow,]}>{value.doc}</Text>
                      <Text style={[servicesHome.cardRow,]}>{value.date}</Text>
                    </View>
                  <Icon style={[servicesHome.icon,{marginLeft:150 ,color:'#88EECC'}]} name='house-user' size={50} color='#E0E2E1' />
                  </View>
                </TouchableOpacity>
                </Card>
              )
           })}
        </View>
        
      </View>
      </ScrollView>
    <Footer />
     {/* <Navigation /> */}
    </View>
   
  )
}

export default Hematology

