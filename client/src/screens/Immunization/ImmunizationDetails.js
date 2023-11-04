import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React,{ useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation,useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ImmunizationDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;
  const recordId = route.params?.recordId;
  const [childInfo, setChildInfo] = useState([]);
  const [patientRecords, setPatientRec] = useState([]);
  const [motherInfo, setMotherInfo] = useState([]);
  const [fatherInfo, setFatherInfo] = useState([]);
  
  const [guardianInfo, setGuardianInfo] = useState([]);

  useEffect(() => {
    getProfiles();
    getPrenatalDetails();
    },[])
  
   //console.log("profileid: ",profileId)
   //console.log("recordid: ",recordId)
  
  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
   
    try {
      const response = await axios.get(`/account/fetchmember/${acctId}`);
      //console.log("response.data: ",response.data.profile)
      const profiles = response.data.profile;
      const motherProfile = profiles.find(profile => profile.relationship === "Mother");
      const fatherProfile = profiles.find(profile => profile.relationship === "Father");
      const guardianProfile = profiles.find(profile => profile.relationship === "Guardian");
      setMotherInfo(motherProfile || {});
      setFatherInfo(fatherProfile || {});
      setGuardianInfo(guardianProfile || {});    
      
      const fetchPatientInfo = await axios.get(`/profile/${profileId}`);
          setChildInfo(fetchPatientInfo.data);

          } catch (error) {
            console.error(error);
          }
        }

      const getPrenatalDetails = async () => {
          try {
            const response = await axios.get(`/childhealth/getrecord/${recordId}`);
            setPatientRec(response.data);
            
        } catch (error) {
            console.error(error);
        }
      }
   
      
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
      
      
      const onImmunizationSession=(sessionid)=>{
          navigation.navigate("Immunization Session",{sessionId :sessionid})
      }

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
              <Text><Text style={styles.label}>Name : </Text>{childInfo.first_name + " "+ childInfo.middle_name + " " + childInfo.last_name}</Text>
              <Text><Text style={styles.label}>Gender: </Text>{childInfo.gender}</Text>
              <Text><Text style={styles.label}>Date of Birth: </Text>{formatDate(childInfo.birthDate)}</Text>
              <Text><Text style={styles.label}>Address: </Text>{childInfo.street + " " + childInfo.barangay + " " + childInfo.municipality + " " + childInfo.zipCode}</Text>
              <Text><Text style={styles.label}>Place of Delivery: </Text>{patientRecords.placeOfDelivery}</Text>
              <Text><Text style={styles.label}>Mother’s Name: </Text>{motherInfo.first_name + " "+ motherInfo.middle_name + " " + motherInfo.last_name}</Text>
              <Text><Text style={styles.label}>Mother’s Age: </Text>{motherInfo.age}</Text>
              <Text><Text style={styles.label}>Mother’s Occupation: </Text>{motherInfo.occupation}</Text>
              <Text><Text style={styles.label}>Mother’s Contact: </Text>{motherInfo.contactNo}</Text>
             
              <Text><Text style={styles.label}>Father’s Name: </Text>{fatherInfo.first_name + " "+ fatherInfo.middle_name + " " + fatherInfo.last_name}</Text>
              <Text><Text style={styles.label}>Father’s Age: </Text>{fatherInfo.age}</Text>
              <Text><Text style={styles.label}>Father’s Occupation: </Text>{fatherInfo.occupation}</Text>
              <Text><Text style={styles.label}>Father’s Contact: </Text>{fatherInfo.contactNo}</Text>
              
              
              <Text><Text style={styles.label}>Birth Weight: </Text>{patientRecords.birthWeight}</Text>
              <Text><Text style={styles.label}>Type of Feeding: </Text>{patientRecords.typeOfFeeding}</Text>
              <Text><Text style={styles.label}>Date of New Born Screening: </Text>{formatDate(patientRecords.dateOfNewbornScreening)}</Text>
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Vaccine</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
          {
            patientRecords.childHealthVaccine && patientRecords.childHealthVaccine.map((rec, idx) => {
                      if (rec._id != null) {
                      return (
                        <Text><Text style={styles.label}>{rec.vaccine_name} :  </Text>&nbsp;&nbsp;{formatDate(rec.dateGiven)}</Text>
                        );
                      }
                                                              
                    })
            }
          </View>
        </View>
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={[styles.title,{fontSize:20, fontWeight:'bold'}]}>SESSION FINDINGS</Text>
        </View> 
        {patientRecords.childHealthAssessment && patientRecords.childHealthAssessment.map((rec, idx) => {
           if (rec._id != null) {
            return (
            <Card containerStyle={styles.card} key={rec._id}>
                <TouchableOpacity onPress={()=> onImmunizationSession(rec._id)}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                    <Text style={styles.cardRow}>Session {rec._id.slice(-6)}</Text>
                    <Text style={styles.cardRow}>{formatDate(rec.updatedAt)}</Text>
                    <Icon style={[styles.icon]} name='angle-right' size={23}  />
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
          )
        }})}
      </View>
    </ScrollView>
  )
}

export default ImmunizationDetails

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
    justifyContent:'flex-start',
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