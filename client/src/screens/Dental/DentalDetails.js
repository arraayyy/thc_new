import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions, PixelRatio} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DentalDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;
  const recordId = route.params?.recordId;
  const [profiles, setProfiles] = useState([]);
  const [patientInfo, setPatientInfo] = useState([]);
  const [dentalInfo, setDentalInfo] = useState([]);

  useEffect(() => {
    getProfiles();
    getDentalDetails();
  }, [])

  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
    
    try {
      const response = await axios.get(`http://10.0.2.2:8001/account/fetchmember/${acctId}`);
      setProfiles(response.data.profile);
      
      const fetchPatientInfo = await axios.get(`http://10.0.2.2:8001/profile/${profileId}`);
      setPatientInfo(fetchPatientInfo.data)

    } catch (error) {
        console.error(error);
    }
  }

  const getDentalDetails = async () => {
    try {
        const response = await axios.get(`http://10.0.2.2:8001/oralhealth/getrecord/${profileId}/${recordId}`);
        setDentalInfo(response.data.record);
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
              <Text><Text style={styles.label}>Name :  </Text>{patientInfo.first_name + " "+ patientInfo.middle_name + " " + patientInfo.last_name}</Text>
              <Text><Text style={styles.label}>Sex: </Text>{patientInfo.gender}</Text>
              <Text><Text style={styles.label}>Date of Birth: </Text>{formatDate(patientInfo.birthDate)}</Text>
              <Text><Text style={styles.label}>Age: </Text>{patientInfo.age}</Text>
              <Text><Text style={styles.label}>Place of Birth: </Text>{patientInfo.birthPlace}</Text>
              <Text><Text style={styles.label}>Occupation: </Text>{patientInfo.occupation}</Text>
              <Text><Text style={styles.label}>Address: </Text>{patientInfo.street + " " + patientInfo.barangay + " " + patientInfo.municipality + " " + patientInfo.zipCode}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Oral Health Condition</Text>
          <View style = {styles.lineStyle} />
          <View style={[styles.cardBody]} >
            <Text><Text style={styles.label}>Date of Oral Examination:  </Text>{formatDate(dentalInfo.createdAt)}</Text>
            <Text ><Text style={styles.label}>Dental Caries: </Text>{dentalInfo?.dentalCaries ? "Yes" : "No"}</Text>
            <Text><Text style={styles.label}>Gingivitis:  </Text>{dentalInfo?.gingivitis ? "Yes" : "No"}</Text>
            <Text ><Text style={styles.label}>Periodontal Disease: </Text>{dentalInfo?.periodontalDisease ? "Yes" : "No"}</Text>
            <Text><Text style={styles.label}>Debris:  </Text>{dentalInfo?.debris ? "Yes" : "No"}</Text>
            <Text ><Text style={styles.label}>Calculus: </Text>{dentalInfo?.calculus ? "Yes" : "No"}</Text>
            <Text><Text style={styles.label}>Abnormal Growth: </Text>{dentalInfo?.abnormalGrowth ? "Yes" : "No"}</Text>
            <Text ><Text style={styles.label}>Cleft Lip/Palate: </Text>{dentalInfo?.cleftLip ? "Yes" : "No"}</Text>
            <Text><Text style={styles.label}>No. of  Permanent Teeth Present:  </Text>{dentalInfo.no_permTeethPres}</Text>
            <Text ><Text style={styles.label}>No. of Permanent Sound Teeth: </Text>{dentalInfo.no_permSoundTeeth}</Text>
            <Text><Text style={styles.label}>No. of Decayed Teeth:  </Text>{dentalInfo.no_permDecayedTeeth}</Text>
            <Text ><Text style={styles.label}>No. of Missing Teeth: </Text>{dentalInfo.no_permMissingTeeth}</Text>
            <Text ><Text style={styles.label}>No. of Filled Teeth: </Text>{dentalInfo.no_permFilledTeeth}</Text>
            <Text><Text style={styles.label}>Total DMF Teeth:  </Text>{dentalInfo.totalDMFTeeth}</Text>
            <Text ><Text style={styles.label}>No. of Temporary Teeth Present: </Text>{dentalInfo.no_tempTeethPres}</Text>
            <Text><Text style={styles.label}>No. of Temporary Sound Teeth:  </Text>{dentalInfo.no_tempSoundTeeth}</Text>
            <Text><Text style={styles.label}>Total of DF Teeth:  </Text>{dentalInfo.totalDFTeeth}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Physical Examnination</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Blood Pressure:  </Text>{patientInfo?.vital_signs?.bloodpressure}</Text>
            <Text><Text style={styles.label}>Pulse Rate: </Text>{patientInfo?.vital_signs?.pulseRate}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Medical History</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Previous Illness: </Text>{dentalInfo?.medicalHistory?.illness ? dentalInfo?.medicalHistory?.illness : "N/A"}</Text>
            <Text><Text style={styles.label}>Allergy: </Text>{dentalInfo?.medicalHistory?.allergy ? dentalInfo?.medicalHistory?.allergy : "N/A"}</Text>
            <Text><Text style={styles.label}>Previous Hospitalization: </Text>{dentalInfo?.medicalHistory?.hospitalization ? dentalInfo?.medicalHistory?.hospitalization : "N/A"}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Dietary Habits</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Sugar Sweetened Beverages/Food:  </Text>{dentalInfo.sugarBvrgs}</Text>
            <Text><Text style={styles.label}>Frequency of taking Alcohol: </Text>{dentalInfo.freq_alcohol}</Text>
            <Text><Text style={styles.label}>Frequency of taking Tobacco:</Text>{dentalInfo.freq_tobacco}</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default DentalDetails

const width = Dimensions.get('window').width - 40;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

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

