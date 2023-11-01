import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use a different icon library if you prefer
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import Footer from '../../components/Footer'

const Prenatal = () => {
  const [records,setRecords]= useState([]);
  const route = useRoute();
  const profileId = route.params?.profileId;
  const navigation = useNavigation();
  
  console.log("Profile Id :", profileId);
  
  useEffect(() => {
    patientRecords();
  }, [])


  const patientRecords = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8001/maternalhealth/${profileId}`);
      setRecords(response.data.medical_records);
  } catch (error) {
      // Handle the error here
      console.error(error);
  }
}
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.headerContainer}>
            {/* Table Header */}
            <View style={styles.header}>
              <Text style={styles.title}>MY PRENATAL RECORDS</Text>
            </View>

            {/* Table Data */}
          
            
            {records && records.map((value,indx)=>{
               if(value.service_id !== null && value.service_id.recordStat !== false){
                return(
                  <Card containerStyle={styles.card} key={indx}>
                    <TouchableOpacity 
                      onPress={()=> navigation.navigate("Prenatal Results", value)}>
                      <View style={{flexDirection:'row'}}>
                        <View>
                          <Text 
                            style={[
                              styles.cardRow, 
                              {fontSize:20, fontWeight:'bold', color: "#44AA92"}
                            ]}>Examination {value.service_id._id}</Text>
                          <Text style={[styles.cardRow,]}>Dr.{value.service_id.attendedBy}</Text>
                          <Text style={[styles.cardRow,]}>{formatDate(value.service_id.createdAt)}</Text>
                        </View>
                      <Icon style={[styles.icon,{marginLeft:30 ,color:'#44AA92'}]} name='vial' size={25} color='#44AA92' />
                      </View>
                    </TouchableOpacity>
                  </Card>
                )}
            })}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
   
  )
}

export default Prenatal

const width = Dimensions.get('window').width -40;
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
      backgroundColor: '#44AA92',
    },
    cardRow: {
      color:'black'
    },
    card:{
      backgroundColor:'#F9F9F9',
      marginLeft:0,
      width: width ,
      borderRadius:15,
      borderWidth:1,
      borderColor: '#91E0CE' 
    }
    // You can add more styles for table data rows as needed
  });