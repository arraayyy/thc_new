import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React, { useState, useEffect }from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation,useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PrenatalDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;
  const recordId = route.params?.recordId;
  const [profiles, setProfiles] = useState([]);
  const [husband, setHusband] = useState([]);
  const [patientInfo, setPatientInformation] = useState([]);
  const [prenatalInfo, setPrenatalInformation] = useState([]);


  useEffect(() => {
    getProfiles();
    getPrenatalDetails();
    },[])
  
   
  
  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");
    
    try {
      const response = await axios.get(`/account/fetchmember/${acctId}`);
      setProfiles(response.data.profile);
      
      const fetchPatientInfo = await axios.get(`/profile/${profileId}`);
      setPatientInformation(fetchPatientInfo.data);
     
      const checkIfFather = (profiles) => {
        return profiles.relationship === "Father";
      }
  
      const fatherProfiles = response.data.profile.filter(checkIfFather);
  
      if (fatherProfiles.length > 0) {
        setHusband(fatherProfiles)
       
      } else {
        console.log("No profiles with relationship 'Father'");
        setHusband([])
      }

          } catch (error) {
            console.error(error);
          }
        }

      const getPrenatalDetails = async () => {
          try {
            const response = await axios.get(`/maternalhealth/getrecord/${profileId}/${recordId}`);
            setPrenatalInformation(response.data.record);
           
        } catch (error) {
            console.error(error);
        }
      }
   
      
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
      
      let patient = 
        {
            Urine:"Normal",
            CBC:"Normal",
            BT:"Normal",
            HBS:"Normal",
            PPC:"N/A",
        };
      
      const onPrenatalSession=(sessionid)=>{
          navigation.navigate("Prenatal Session",{sessionId :sessionid})
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
            <Text><Text style={styles.label}>Name:  </Text> {patientInfo.first_name} {patientInfo.middle_name} {patientInfo.last_name}</Text>
            <Text><Text style={styles.label}>Age: </Text> {patientInfo.age}</Text>
            <Text><Text style={styles.label}>Birthdate: </Text> {formatDate(patientInfo.birthDate)}</Text>
            <Text><Text style={styles.label}>Place of Birth: </Text> {patientInfo.birthPlace}</Text>
            <Text><Text style={styles.label}>Occupation: </Text> {patientInfo.occupation}</Text>
            <Text><Text style={styles.label}>Address: </Text> {patientInfo.street + " " + patientInfo.barangay + " " + patientInfo.municipality + " " + patientInfo.zipCode}</Text>
            <Text><Text style={styles.label}>Husband's Name: </Text> {husband.length > 0
                    ? `${husband[0].first_name} ${husband[0].middle_name} ${husband[0].last_name}`
                    : 'N/A'}
              </Text>
            <Text><Text style={styles.label}>Husband's Occupation: </Text> {husband.length > 0 ? husband[0].occupation : 'N/A'}
              </Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Obstetrical Information</Text>
          <View style = {styles.lineStyle} />
          <View style={[styles.cardBody]} >
            <Text><Text style={styles.label}>Gravida: </Text> {prenatalInfo?.obstetricalHistory?.numGravida}</Text>
            <Text><Text style={styles.label}>Para "(Parity)": </Text> {prenatalInfo?.obstetricalHistory?.numPara}</Text>
            <Text><Text style={styles.label}>No. of Full Term: </Text> {prenatalInfo?.obstetricalHistory?.numFullterm}</Text>
            <Text><Text style={styles.label}>No. of Abortion: </Text> {prenatalInfo?.obstetricalHistory?.numOfAbortion}</Text>
            <Text><Text style={styles.label}>No. of Premature: </Text> {prenatalInfo?.obstetricalHistory?.numPremature}</Text>
            <Text><Text style={styles.label}>No of Children Born Alive: </Text> {prenatalInfo?.obstetricalHistory?.numBornAlive}</Text>
            <Text><Text style={styles.label}>No. of Living Children: </Text> {prenatalInfo?.obstetricalHistory?.numOfLivingChild}</Text>
            <Text><Text style={styles.label}>No of Stillbirths: </Text>{prenatalInfo?.obstetricalHistory?.numOfStillBirth}</Text>
            <Text><Text style={styles.label}>Number of Large Babies: </Text> {prenatalInfo?.obstetricalHistory?.numberOfLargeBabies}</Text>
            <Text><Text style={styles.label}>Date of Last Delivery: </Text> {formatDate(prenatalInfo?.obstetricalHistory?.dateOfLastDelivery)}</Text>
            <Text><Text style={styles.label}>Type of Last Delivery: </Text> {prenatalInfo?.obstetricalHistory?.typeOfLastDelivery}</Text>
            <Text><Text style={styles.label}>Last Menstrual Period: </Text> {formatDate(prenatalInfo?.obstetricalHistory?.lastMenstrualPeriod)}</Text>
            <Text><Text style={styles.label}>Menstrual Flow: </Text> {prenatalInfo?.obstetricalHistory?.menstrualFlow}</Text>
            <Text><Text style={styles.label}>Hydatidiform mole: </Text> {prenatalInfo?.obstetricalHistory?.hydatidiformMole ? 'Yes' : 'No'}</Text>
            <Text><Text style={styles.label}>History of Ectopic Pregnancy: </Text> {prenatalInfo?.obstetricalHistory?.ectopicPregnancy ? 'Yes' : 'No'}</Text>
            <Text><Text style={styles.label}>History of Dysmenorrhea: </Text> {prenatalInfo?.obstetricalHistory?.dysmenorrhea ? 'Yes' : 'No'}</Text>
            <Text><Text style={styles.label}>Diabetes: </Text> {prenatalInfo?.obstetricalHistory?.diabetes ? 'Yes' : 'No'}</Text>
          </View>
        </View>

        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Medical History</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Previous Illness: </Text> {prenatalInfo?.medicalHistory?.illness ? prenatalInfo.medicalHistory.illness : "N/A"}</Text>
            <Text><Text style={styles.label}>Allergy: </Text> {prenatalInfo?.medicalHistory?.allergy ? prenatalInfo.medicalHistory.allergy : "N/A"}</Text>
            <Text><Text style={styles.label}>Previous Hospitalization: </Text> {prenatalInfo?.medicalHistory?.hospitalization ? prenatalInfo.medicalHistory.hospitalization : "N/A"}</Text>
         </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Tetanus Toxoid Status</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
          {
            prenatalInfo.tetanusToxoidStatus&& prenatalInfo.tetanusToxoidStatus.map((rec, idx) => {
                      if (rec._id != null) {
                      return (
                        <Text><Text style={styles.label}>{rec.vaccine_name} :  </Text>&nbsp;&nbsp;{formatDate(rec.dateGiven)}</Text>
                        );
                      }
                                                              
                    })
            }
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Laboratory Examination</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={styles.label}>Urinalysis Results :  </Text>{patient.Urine}</Text>
            <Text><Text style={styles.label}>CBC Results: </Text>{patient.CBC}</Text>
            <Text><Text style={styles.label}>Blood Typing Results: </Text>{patient.BT}</Text>
            <Text><Text style={styles.label}>HBS Antigen Results: </Text>{patient.HBS}</Text>
            <Text><Text style={styles.label}>Previous Pregnancy Complications: </Text>{patient.PPC}</Text>
          </View>
        </View>
        
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={[styles.title,{fontSize:20, fontWeight:'bold'}]}>SESSION FINDINGS</Text>
        </View> 
        {prenatalInfo.maternalHealthAssessment && prenatalInfo.maternalHealthAssessment.map((rec, idx) => {
           if (rec._id != null) {
            return (
            <Card containerStyle={styles.card} key={rec._id}>
                <TouchableOpacity onPress={()=> onPrenatalSession(rec._id)}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                    <Text style={styles.cardRow}>Session {rec._id.slice(-6)}</Text>
                    <Text style={styles.cardRow}>{formatDate(rec.createdAt)}</Text>
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

export default PrenatalDetails

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
});