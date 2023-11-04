import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions, PixelRatio} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const FamilyPlanningDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const profileId = route.params?.profileId;
    const recordId = route.params?.recordId;
    const [profiles, setProfiles] = useState([]);
    const [patientInfo, setPatientInfo] = useState([]);
    const [familyplanningInfo, setFamilyPlanningInfo] = useState([]);

    useEffect(() => {
        getProfiles();
        getFamilyPlanningDetails();
    },[])

    const getProfiles = async () => {
        const acctId = await AsyncStorage.getItem("accountId");
        
        try {
          const response = await axios.get(`/account/fetchmember/${acctId}`);
          setProfiles(response.data.profile);
          
          const fetchPatientInfo = await axios.get(`/profile/${profileId}`);
          setPatientInfo(fetchPatientInfo.data);
    
        } catch (error) {
            console.error(error);
        }
    }

    const getFamilyPlanningDetails = async () => {
        try {
            const response = await axios.get(`/familyplanning/getrecord/${profileId}/${recordId}`);
            setFamilyPlanningInfo(response.data.record);
        } catch (error) {
            console.error(error);
        }
    }
    
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    const onFamilyPlanningRecord =(sessionid)=>{
        navigation.navigate("Family Planning Assessment", {sessionId :sessionid})
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
                        <Text><Text style={styles.label}>Name :  </Text>{patientInfo.first_name + " "+ patientInfo.middle_name + " " + patientInfo.last_name}</Text>
                        <Text><Text style={styles.label}>Age: </Text>{patientInfo.age}</Text>
                        <Text><Text style={styles.label}>Birthdate: </Text>{formatDate(patientInfo.birthDate)}</Text>
                        <Text><Text style={styles.label}>Educational Assessment: </Text>{patientInfo.educAttain}</Text>
                        <Text><Text style={styles.label}>Occupation: </Text>{patientInfo.occupation}</Text>
                        <Text><Text style={styles.label}>Address: </Text>{patientInfo.street + " " + patientInfo.barangay + " " + patientInfo.municipality + " " + patientInfo.zipCode}</Text>
                        <Text><Text style={styles.label}>Contact Number: </Text>{patientInfo.contactNo}</Text>
                        <Text><Text style={styles.label}>Civil Status: </Text>{patientInfo.civilStatus}</Text>
                        <Text><Text style={styles.label}>Religion: </Text>{patientInfo.religion}</Text>
                        <Text><Text style={styles.label}>Name of Spouse: </Text>{familyplanningInfo.nameSpouse}</Text>
                        <Text><Text style={styles.label}>Spouse Age: </Text>{familyplanningInfo.spouseAge}</Text>
                        <Text><Text style={styles.label}>Spouse Occupation: </Text>{familyplanningInfo.spouseOccupation}</Text>
                        <Text><Text style={styles.label}>Number of Living Children: </Text>{familyplanningInfo.noLivingChild}</Text>
                        <Text><Text style={styles.label}>Plan to have more children: </Text>{familyplanningInfo?.planAddChild ? 'Yes' : 'No'}</Text>
                        <Text><Text style={styles.label}>Average Monthly Income: </Text>{familyplanningInfo.aveMonthIncome}</Text>
                        <Text><Text style={styles.label}>Medical History: </Text>{familyplanningInfo?.medicalHistory?.illness ? familyplanningInfo?.medicalHistory?.illness : "N/A"}</Text>
                    </View>
                </View>

                <View style={[styles.titleBox]}>
                <Text style={styles.cardTitle}>Obstetrical History</Text>
                <View style = {styles.lineStyle} />
                    <View style={[styles.cardBody]} >
                            <Text><Text style={styles.label}>Gravida :  </Text>{familyplanningInfo?.obstetricalHistory?.numGravida}</Text>
                            <Text ><Text style={styles.label}>Para "(Parity)": </Text>{familyplanningInfo?.obstetricalHistory?.numPara}</Text>
                            <Text ><Text style={styles.label}>No. of Full Term :  </Text>{familyplanningInfo?.obstetricalHistory?.numFullterm}</Text>
                            <Text ><Text style={styles.label}>No. of Abortion : </Text>{familyplanningInfo?.obstetricalHistory?.numOfAbortion}</Text>
                            <Text ><Text style={styles.label}>No. of Premature :  </Text>{familyplanningInfo?.obstetricalHistory?.numPremature}</Text>
                            <Text ><Text style={styles.label}>No of Children Born Alive: </Text>{familyplanningInfo?.obstetricalHistory?.numBornAlive}</Text>
                            <Text ><Text style={styles.label}>No. of Living Children:  </Text>{familyplanningInfo?.obstetricalHistory?.numOfLivingChild}</Text>
                            <Text ><Text style={styles.label}>No of Stillbirths: </Text>{familyplanningInfo?.obstetricalHistory?.numOfStillBirth}</Text>
                            <Text ><Text style={styles.label}>Date of Last Delivery :  </Text>{formatDate(familyplanningInfo?.obstetricalHistory?.dateOfLastDelivery)}</Text>
                            <Text ><Text style={styles.label}>Type of Last Delivery: </Text>{familyplanningInfo?.obstetricalHistory?.typeOfLastDelivery}</Text>
                            <Text ><Text style={styles.label}>Menstrual Flow :  </Text>{familyplanningInfo?.obstetricalHistory?.menstrualFlow}</Text>
                            <Text ><Text style={styles.label}>Dysmenorrhea: </Text>{familyplanningInfo?.obstetricalHistory?.dysmenorrhea ? "Yes" : "No"}</Text>
                            <Text ><Text style={styles.label}>Hydatidiform mole: </Text>{familyplanningInfo?.obstetricalHistory?.hydatidiformMole ? "Yes" : "No"}</Text>
                            <Text ><Text style={styles.label}>History of Ectopic Pregnancy:  </Text>{familyplanningInfo?.obstetricalHistory?.ectopicPregnancy ? "Yes" : "No"}</Text>
                            <Text ><Text style={styles.label}>Diabetes:  </Text>{familyplanningInfo?.obstetricalHistory?.diabetes ? "Yes" : "No"}</Text>
                        </View>
                    </View>

                    <View style={[styles.titleBox]}>
                        <Text style={styles.cardTitle}>Physical Examination</Text>
                        <View style = {styles.lineStyle} />
                        <View style={styles.cardBody}>
                            <Text><Text style={styles.label}>Weight : </Text>{patientInfo?.vital_signs?.weight}</Text>
                            <Text><Text style={styles.label}>Height: </Text>{patientInfo?.vital_signs?.height}</Text>
                            <Text><Text style={styles.label}>Blood Pressure: </Text>{patientInfo?.vital_signs?.bloodpressure}</Text>
                            <Text><Text style={styles.label}>Pulse Rate: </Text>{patientInfo?.vital_signs?.pulseRate}</Text>
                            <Text><Text style={styles.label}>Skin: </Text>{familyplanningInfo.pe_skin}</Text>
                            <Text><Text style={styles.label}>Extremities: </Text>{familyplanningInfo.pe_extremities}</Text>
                            <Text><Text style={styles.label}>Conjunctive: </Text>{familyplanningInfo.pe_conjunctiva}</Text>
                            <Text><Text style={styles.label}>Breast: </Text>{familyplanningInfo.pe_breast}</Text>
                            <Text><Text style={styles.label}>Neck: </Text>{familyplanningInfo.pe_neck}</Text>
                            <Text><Text style={styles.label}>Abdomen: </Text>{familyplanningInfo.pe_abdomen}</Text>
                            <Text><Text style={styles.label}>Pelvic: </Text>{familyplanningInfo.pe_pelvicExam}</Text>
                        </View>
                    </View>
                    
                <View style={{marginTop: 20,paddingLeft:10}}>
                    <Text style={[styles.title,{fontSize:20, fontWeight:'bold'}]}>FAMILY PLANNING ASSESSMENTS</Text>
                </View> 
                    {familyplanningInfo.familyPlanningAssessment && familyplanningInfo.familyPlanningAssessment.map((rec, idx) => {
                        if (rec._id != null) {
                        return(
                            <Card containerStyle={styles.sessionCard} key={rec._id}>
                                <TouchableOpacity onPress={()=> onFamilyPlanningRecord(rec._id)}>    
                                <View style={{flexDirection:'column'}}>
                                    <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                                    <Text style={styles.sessionCardRow}>Assessment {rec._id.slice(-6)}</Text>
                                    {/* <Text style={styles.cardRow}>{rec.serviceProvider}</Text> */}
                                    <Text style={styles.sessionCardRow}>{formatDate(rec.createdAt)}</Text>
                                    <Icon style={[styles.icon,{color:'white'}]} name='angle-right' size={30} color='#E0E2E1' />
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </Card>
                        )
                    }})}
            </View>
        </ScrollView>
      );
}

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
      fontSize:15, 
      color:'white',
      fontWeight:'bold',
      marginBottom: 5,
    },

    sessionCard: {
        backgroundColor: '#91E0CE',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#44AA92',
        shadowColor: '#566e66',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    sessionCardRow: {
        fontSize: getFontSize(15),
        color: '#44AA92',
        fontWeight: 'bold',
        marginBottom: 5,
      },
  })
  
  

export default FamilyPlanningDetails;