import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions, PixelRatio} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UrinalysisDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const profileId = route.params?.profileId;
    const recordId = route.params?.recordId;
    const [profiles, setProfiles] = useState([]);
    const [patientInfo, setPatientInfo] = useState([]);
    const [urinalysisInfo, setUrinalysisInfo] = useState([]);    

    useEffect(() => {
        getProfiles();
        getUrinalysisDetails();
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

    const getUrinalysisDetails = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:8001/urinalysis/getrecord/${profileId}/${recordId}`);
            setUrinalysisInfo(response.data.record);
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
                    <Text><Text style={{ fontWeight: 'bold', color: '#44AA92' }}>PERFORMED BY: </Text>{urinalysisInfo.serviceProvider}</Text>
                </View>

                <View style={[styles.titleBox]}>
                    <Text style={styles.cardTitle}>Physicochemical Examination</Text>
                    <View style = {styles.lineStyle} />
                    <View style={styles.cardBody}>
                        <Text><Text style={styles.label}>Color:  </Text>{urinalysisInfo.color}</Text>
                        <Text><Text style={styles.label}>Character: </Text>{urinalysisInfo.character}</Text>
                        <Text><Text style={styles.label}>Reagent strip used: </Text>{urinalysisInfo.reangentStrip}</Text>
                        <Text><Text style={styles.label}>Glucose: </Text>{urinalysisInfo.glucosLevel}</Text>
                        <Text><Text style={styles.label}>Bilirubin: </Text>{urinalysisInfo.bilirubin}</Text>
                        <Text><Text style={styles.label}>Ketone: </Text>{urinalysisInfo.ketoneLevel}</Text>
                        <Text><Text style={styles.label}>Specific Gravity: </Text>{urinalysisInfo.specificGravity}</Text>
                        <Text><Text style={styles.label}>Blood: </Text>{urinalysisInfo.bloodLevel}</Text>
                        <Text><Text style={styles.label}>PH Level: </Text>{urinalysisInfo.phLevel}</Text>
                        <Text><Text style={styles.label}>Protein: </Text>{urinalysisInfo.proteinLevel}</Text>
                        <Text><Text style={styles.label}>Urobilinogen: </Text>{urinalysisInfo.urobilinogenLevel}</Text>
                        <Text><Text style={styles.label}>Nitrate: </Text>{urinalysisInfo.nitrate}</Text>
                        <Text><Text style={styles.label}>Leukocyte: </Text>{urinalysisInfo.leukocyteLevel}</Text>
                    </View>
                </View>

                <View style={[styles.titleBox]}>
                    <Text style={styles.cardTitle}>Microscopic Examination</Text>
                    <View style = {styles.lineStyle} />
                    <View style={styles.cardBody}>
                        <Text><Text style={styles.label}>Red Blood Cells:  </Text>{urinalysisInfo.redBloodCellLevel}</Text>
                        <Text><Text style={styles.label}>Pus Cells: </Text>{urinalysisInfo.pusLevel}</Text>
                    </View>
                </View>

                <View style={[styles.titleBox]}>
                    <Text style={styles.cardTitle}>Crystals</Text>
                    <View style = {styles.lineStyle} />
                    <View style={styles.cardBody}>
                        <Text><Text style={styles.label}>Calcium Oxalates:  </Text>{urinalysisInfo.calciumOxaletes}</Text>
                        <Text><Text style={styles.label}>Amorphous Urates: </Text>{urinalysisInfo.amorphousUrates}</Text>
                        <Text><Text style={styles.label}>Uric Acid: </Text>{urinalysisInfo.uricAcid}</Text>
                        <Text><Text style={styles.label}>Amorphous Phosphates: </Text>{urinalysisInfo.amorphousPhosphates}</Text>
                        <Text><Text style={styles.label}>Triple Phosphates:  </Text>{urinalysisInfo.triplePhosphate}</Text>
                    </View>
                </View>

                <View style={[styles.titleBox]}>
                    <Text style={styles.cardTitle}>Miscellaneous Structures</Text>
                    <View style = {styles.lineStyle} />
                    <View style={styles.cardBody}>
                        <Text><Text style={styles.label}>Squamous Epithelial Cells:  </Text>{urinalysisInfo.squamousEpithelialCells}</Text>
                        <Text><Text style={styles.label}>Round Epithelial Cells: </Text>{urinalysisInfo.roundEpithelialCells}</Text>
                        <Text><Text style={styles.label}>Bacteria:  </Text>{urinalysisInfo.bacteria}</Text>
                        <Text><Text style={styles.label}>Mucus Threads: </Text>{urinalysisInfo.mucusThreads}</Text>
                        <Text><Text style={styles.label}>Yeast Cells:  </Text>{urinalysisInfo.yeastCells}</Text>
                    </View>
                </View>
       

                <View style={[styles.titleBox]}>
                    <Text style={styles.cardTitle}>Remarks</Text>
                    <View style = {styles.lineStyle} />
                    <View style={styles.cardBody}>
                        <Text><Text style={styles.label}>  </Text>{urinalysisInfo.remarks}</Text>
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

export default UrinalysisDetails;