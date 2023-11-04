import { View, Text, ScrollView ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MedicalCheckupDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;
  const recordId = route.params?.recordId;
  const [profiles, setProfiles] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [medicalCheckupInfo, setMedicalCheckupInfo] = useState([]);
  
  useEffect(() => {
    getProfiles();
    getMedicalCheckupDetails();
  }, [])

  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
    
    try {
      const response = await axios.get(`/account/fetchmember/${acctId}`);
      setProfiles(response.data.profile);
      
      const fetchPatientInfo = await axios.get(`/profile/${profileId}`);
      setPatientInfo(fetchPatientInfo.data);
     
      const checkIfFather = (profiles) => {
        return profiles.relationship === "Father";
      }

    } catch (error) {
        console.error(error);
    }
  }

  const getMedicalCheckupDetails = async () => {
    try {
        const response = await axios.get(`/medicalcheckup/getrecord/${profileId}/${recordId}`);
        setMedicalCheckupInfo(response.data.record);
    } catch (error) {
        console.error(error);
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>EXAMINATION {recordId.slice(-6)}</Text>
        </View>
        <View style={[styles.titleBox]}>

           <Text style={styles.cardTitle}>Personal Information</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={styles.label}>Name:  </Text>{patientInfo.first_name} {patientInfo.middle_name} {patientInfo.last_name}</Text>
                <Text><Text style={styles.label}>Sex: </Text>{patientInfo.gender}</Text>
                <Text><Text style={styles.label}>Birthdate: </Text>{formatDate(patientInfo.birthDate)}</Text>
                <Text><Text style={styles.label}>Age: </Text>{patientInfo.age}</Text>
                <Text><Text style={styles.label}>Occupation: </Text>{patientInfo.occupation}</Text>
                <Text><Text style={styles.label}>Address: </Text>{patientInfo.street + " " + patientInfo.barangay + " " + patientInfo.municipality + " " + patientInfo.zipCode}</Text>
            </View>
        </View>

        <View style={[styles.titleBox]}>
            <Text style={styles.cardTitle}>Session Findings</Text>
            <View style={styles.lineStyle} />
            <View style={[styles.cardBody]}>
                <Text>
                <Text style={styles.label}>Findings: </Text>
                  {medicalCheckupInfo.findings}
                </Text>

                {/* Add margin at the bottom of "Findings" text */}
                <Text style={{ marginTop: 20 }}>
                <Text style={styles.label}>Recommendation: </Text>
                  {medicalCheckupInfo.recommendation}
                </Text>
            </View>
        </View>

           
      </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },

  body: {
     padding: 15,
  },

  title: {
    color: '#88EECC',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  label:{
    color: '#8EC3B0',
    fontWeight:'bold',
    justifyContent:'flex-start'
  },
     
  titleBox: {
    backgroundColor:'white',
    borderRadius:5,
    marginTop: 20,
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:
      {
        width: 0,
        height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardTitle:{
    fontSize: 20,
    textAlign:'center',
    color:'#44AA92',
    padding:20,
    fontWeight:'bold'
  },

  lineStyle:{
    borderWidth: 0.1,
    backgroundColor:'black',
    height:0.5,
    width:'100%'
  },

  cardBody:{
    padding:30
  },

  card:{
    backgroundColor:'#88EECC',
    marginLeft:0,
    width:350 ,
    borderRadius:10,
    borderWidth:1,
    borderColor: '#F9F9F9',
    shadowColor:'black',
    shadowOffset:
      {
        width: 0,
        height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  }, 

  cardRow:{
    fontSize:16, 
    color:'white',
    fontWeight:'bold'
  }
})

export default MedicalCheckupDetails;