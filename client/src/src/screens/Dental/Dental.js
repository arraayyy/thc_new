import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, } from 'react-native';
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use a different icon library if you prefer
import { useNavigation } from '@react-navigation/native';
import servicesHome from '../../styles/ServicesHome';

import Footer from '../../components/Footer'

const Dental = () => {
  const navigation = useNavigation();
  let exams =[
    {examID:1, doc:"Dr.Doe", date:'01-23-2023'},
    {examID:2, doc:"Dr.Jane", date:'02-24-2023'},
    {examID:3, doc:"Dr.Smith", date:'03-25-2023'},
    {examID:4, doc:"Dr.John", date:'04-26-2023'}
  ];

  return (
    <View style={servicesHome.container}>
      <ScrollView>
        <View style={servicesHome.body}>
          <View style={servicesHome.headerContainer}>
            {/* Table Header */}
            <View style={servicesHome.header}>
              <Text style={servicesHome.title}>MY DENTAL RECORDS</Text>
            </View>

            {/* Table Data */}
          
            
            {exams && exams.map((value,indx)=>{
                return(
                  <Card containerStyle={servicesHome.card} key={indx}>
                    <TouchableOpacity 
                      onPress={()=> navigation.navigate("Dental Details", value)}>
                      <View style={{flexDirection:'row'}}>
                        <View>
                          <Text 
                            style={[
                              servicesHome.cardRow, 
                              {fontSize:20, fontWeight:'bold', color: "#44AA92"}
                            ]}>Examination {value.examID}</Text>
                          <Text style={[servicesHome.cardRow,]}>{value.doc}</Text>
                          <Text style={[servicesHome.cardRow,]}>{value.date}</Text>
                        </View>
                      <Icon style={[servicesHome.icon,{marginLeft:170 ,color:'#44AA92'}]} name='vial' size={25} color='#44AA92' />
                      </View>
                    </TouchableOpacity>
                  </Card>
                )
            })}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
   
  )
}

export default Dental


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       paddingTop:10,
//     },
//     body: {
//       padding: 15,
//     },
//     title: {
//       color: 'white',
//       fontSize: 18,
//       marginBottom: 20,
//       fontWeight:'bold',
//     },
//     headerContainer: {
//       borderColor: '#88EECC',
//       borderTopLeftRadius: 10, // Rounded top-left corner
//       borderTopRightRadius: 10, // Rounded top-right corner
//       overflow: 'hidden', // Clip the content inside the rounded border
//       marginTop: 20,
//     },
//     header: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       padding: 10,
//       backgroundColor: '#44AA92',
//     },
//     cardRow: {
//       color:'black'
//     },
//     card:{
//       backgroundColor:'#F9F9F9',
//       marginLeft:0,
//       width: width ,
//       borderRadius:15,
//       borderWidth:1,
//       borderColor: '#91E0CE' 
//     }
//     // You can add more styles for table data rows as needed
//   });