import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions,} from 'react-native';
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use a different icon library if you prefer
import Footer from '../../components/Footer.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Urinalysis = () => {
  const [records,setRecords]= useState([]);
  const route = useRoute();
  const [profile_id,setProfileId]= useState("");
  const navigation = useNavigation();
  
  useEffect(() => {
    getProfileId();
  }, [])

  const getProfileId = async () => {
    try {
      const profileId = await AsyncStorage.getItem('ProfileId');
      if (profileId) {
        setProfileId(profileId)
        console.log("profileId: ", profileId)
        patientRecords(profileId);
      } else {
        // Handle the case where profileId is not found in AsyncStorage
        console.error('ProfileId not found in AsyncStorage');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const patientRecords = async (profileId) => {
      try {
        const response = await axios.get(`/urinalysis/${profileId}`);
        setRecords(response.data.medical_records);
    } catch (error) {
        console.error(error);
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const onUrinalysisRecord =(recordid)=>{
    navigation.navigate("Urinalysis Details", {recordId: recordid, profileId:profile_id})
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.headerContainer}>
            {/* Table Header */}
            <View style={styles.header}>
              <Text style={styles.title}>MY URINALYSIS RECORDS</Text>
            </View>
  
            {/* Table Data */}

            {records && records.length > 0 ? (
              records.map((value, indx) => {
                if (value.service_id !== null && value.service_id.recordStat !== false) {
                  return (
                    <Card containerStyle={styles.card} key={indx}>
                      <TouchableOpacity onPress={() => onUrinalysisRecord(value.service_id._id , profile_id)}>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Text style={[
                              styles.cardRow,
                              { fontSize: 20, fontWeight: 'bold', color: "#44AA92" }
                            ]}>Examination {value.service_id._id.slice(-6)}</Text>
                            <Text style={[styles.cardRow]}>{value.service_id.serviceProvider}</Text>
                            <Text style={[styles.cardRow]}>{formatDate(value.service_id.createdAt)}</Text>
                          </View>
                          <Icon style={[styles.icon, { marginLeft: 100, color: '#44AA92' }]} name='vial' size={25} color='#44AA92' />
                        </View>
                      </TouchableOpacity>
                    </Card>
                  )
                }
              })
            ) : (
              <Text>No Records Found</Text>
            )}

          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

export default Urinalysis

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
      backgroundColor: '#88EECC',
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
      borderColor: '#88EECC' 
    }
    // You can add more styles for table data rows as needed
  });