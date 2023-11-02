import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const HematologyDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;
  const recordId = route.params?.recordId;
  const [profiles, setProfiles] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [hematologyInfo, setHematologyInfo] = useState([]);

  useEffect(() => {
    getProfiles();
    getHematologyDetails();
  }, [])

  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
    
    try {
      const response = await axios.get(`http://10.0.2.2:8001/account/fetchmember/${acctId}`);
      setProfiles(response.data.profile);
      
      const fetchPatientInfo = await axios.get(`http://10.0.2.2:8001/profile/${profileId}`);
      setPatientInfo(fetchPatientInfo.data);
     
      const checkIfFather = (profiles) => {
        return profiles.relationship === "Father";
      }

    } catch (error) {
        console.error(error);
    }
  } 

  const getHematologyDetails = async () => {
    try {
        const response = await axios.get(`http://10.0.2.2:8001/hematology/getrecord/${profileId}/${recordId}`);
        setHematologyInfo(response.data.record);
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
            <Text><Text style={{ fontWeight: 'bold', color: '#44AA92' }}>PERFORMED BY: </Text>{hematologyInfo.serviceProvider}</Text>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Results</Text>
          <View style = {styles.lineStyle}/>
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Hematocritt:  </Text>{hematologyInfo.hematocritLevel}</Text>
            <Text><Text style={styles.label}>Hemoglobin Mass Concentration: </Text>{hematologyInfo.hemoglobinMassConc}</Text>
            <Text><Text style={styles.label}>Erythrocyte Number Concentration: </Text>{hematologyInfo.erythrocyteNumConc}</Text>
            <Text><Text style={styles.label}>Leukocyte Number Concentration: </Text>{hematologyInfo.LeukocyteNumConc}</Text>
            <Text><Text style={styles.label}>Segmenter Number Fraction: </Text>{hematologyInfo.SegmenterNumFract}</Text>
            <Text><Text style={styles.label}>Lymphocyte Number Fraction: </Text>{hematologyInfo.lymphocyteNumFract}</Text>
            <Text><Text style={styles.label}>Monocyte Number Fraction: </Text>{hematologyInfo.MonocyeNumFrac}</Text>
            <Text><Text style={styles.label}>Eosinophile Number Fraction: </Text>{hematologyInfo.EosinophileNumFract}</Text> 
            <Text><Text style={styles.label}>Basophile Number Fraction: </Text>{hematologyInfo.BasophileNumFract}</Text>
            <Text><Text style={styles.label}>Stab: </Text>{hematologyInfo.stab}</Text>
            <Text><Text style={styles.label}>Thrombocyte Number Concentration: </Text>{hematologyInfo.thrombocyteNumConc}</Text>
            <Text><Text style={styles.label}>Reticulocyte  Number Fraction: </Text>{hematologyInfo.retlculocyteNumFrac}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Remarks</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Name:  </Text>{hematologyInfo.remarks}</Text>
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

export default HematologyDetails