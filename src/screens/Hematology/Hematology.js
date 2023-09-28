import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native';
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use a different icon library if you prefer
import Footer from '../../components/Footer.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

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
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          {/* Table Header */}
          <View style={styles.header}>
            <Text style={styles.title}>MY HEMATOLOGY RECORDS</Text>
          </View>

          {/* Table Data */}
         
          
           {exams.map((value,indx)=>{
              return(
                <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={()=> navigation.navigate("Hematology Details", value)}>
                  <View style={{flexDirection:'row'}}>
                    <View>
                      <Text style={[styles.cardRow, {fontSize:20, fontWeight:'bold'}]}>Examination {value.examID}</Text>
                      <Text style={[styles.cardRow,]}>{value.doc}</Text>
                      <Text style={[styles.cardRow,]}>{value.date}</Text>
                    </View>
                  <Icon style={[styles.icon,{marginLeft:150 ,color:'#88EECC'}]} name='house-user' size={50} color='#E0E2E1' />
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop:10,
    },
    body: {
      padding: 15,
    },
    title: {
      color: 'white',
      fontSize: 18,
      marginBottom: 20,
      fontWeight:'bold',
    },
   
    headerContainer: {
     
      borderColor: '#88EECC',
      borderTopLeftRadius: 10, // Rounded top-left corner
      borderTopRightRadius: 10, // Rounded top-right corner
      overflow: 'hidden', // Clip the content inside the rounded border
      marginTop: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#88EECC',
    },
    cardRow: {
      color:'black'
    },
    card:{
      backgroundColor:'#F9F9F9',
      marginLeft:0,
      width:360 ,
      borderRadius:15,
      borderWidth:1,
      borderColor: '#88EECC' 
    }
    // You can add more styles for table data rows as needed
  });