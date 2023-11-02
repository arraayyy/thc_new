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
      const response = await axios.get(`http://10.0.2.2:8001/account/fetchmember/${acctId}`);
      //console.log("response.data: ",response.data.profile)
      const profiles = response.data.profile;
      const motherProfile = profiles.find(profile => profile.relationship === "Mother");
      const fatherProfile = profiles.find(profile => profile.relationship === "Father");
      const guardianProfile = profiles.find(profile => profile.relationship === "Guardian");
      setMotherInfo(motherProfile || {});
      setFatherInfo(fatherProfile || {});
      setGuardianInfo(guardianProfile || {});    
      
      const fetchPatientInfo = await axios.get(`http://10.0.2.2:8001/profile/${profileId}`);
          setChildInfo(fetchPatientInfo.data);

          } catch (error) {
            console.error(error);
          }
        }

      const getPrenatalDetails = async () => {
          try {
            const response = await axios.get(`http://10.0.2.2:8001/childhealth/getrecord/${recordId}`);
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
            <View style={styles.infoSection}>
              <Text style={styles.label}>Name: </Text>
              <Text style={styles.info}>{childInfo.first_name + " "+ childInfo.middle_name + " " + childInfo.last_name}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Gender: </Text>
              <Text style={styles.info}>{childInfo.gender}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Date of Birth: </Text>
              <Text style={styles.info}>{formatDate(childInfo.birthDate)}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Address: </Text>
              <Text style={styles.info}>{childInfo.street + " " + childInfo.barangay + " " + childInfo.municipality + " " + childInfo.zipCode}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Place of Delivery: </Text>
              <Text style={styles.info}>{patientRecords.placeOfDelivery}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Mother’s Name: </Text>
              <Text style={styles.info}>{motherInfo.first_name + " "+ motherInfo.middle_name + " " + motherInfo.last_name}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Mother’s Age: </Text>
              <Text style={styles.info}>{motherInfo.age}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Mother’s Occupation: </Text>
              <Text style={styles.info}>{motherInfo.occupation}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Mother’s Contact: </Text>
              <Text style={styles.info}>{motherInfo.contactNo}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Father’s Name: </Text>
              <Text style={styles.info}>{fatherInfo.first_name + " "+ fatherInfo.middle_name + " " + fatherInfo.last_name}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Father’s Age: </Text>
              <Text style={styles.info}>{fatherInfo.age}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Father’s Occupation: </Text>
              <Text style={styles.info}>{fatherInfo.occupation}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Father’s Contact: </Text>
              <Text style={styles.info}>{fatherInfo.contactNo}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Birth Weight: </Text>
              <Text style={styles.info}>{patientRecords.birthWeight}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Type of Feeding: </Text>
              <Text style={styles.info}>{patientRecords.typeOfFeeding}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>Date of Newborn Screening: </Text>
              <Text style={styles.info}>{formatDate(patientRecords.dateOfNewbornScreening)}</Text>
            </View>
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
                        <Text><Text style={{fontWeight:'bold'}}>{rec.vaccine_name} :  </Text>&nbsp;&nbsp;{formatDate(rec.dateGiven)}</Text>
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
            <Card containerStyle={styles.card} key={idx}>
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
  container: {
    backgroundColor: 'white',
  },
  body: {
    padding: 15,
  },
  title: {
    color: '#88EECC',
    fontSize: 30,
    marginBottom: 20,
  },
  titleBox: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 3,
    
  },
  cardTitle: {
    color: '#44AA92',
    fontSize: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E2E1',
  },
  cardBody: {
    paddingVertical: 10,
    
  },
  card: {
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
  cardRow: {
    fontSize: getFontSize(15),
    color: '#44AA92',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  icon: {
    color: '#44AA92',
  },
  infoSection: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#44AA92',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
})