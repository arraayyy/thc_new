import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { useNavigation,useRoute } from '@react-navigation/native';

const PrenatalSession = () => {
  const route = useRoute();
  const sessionId = route.params?.sessionId;
  console.log("Session Id :", sessionId);
  const [assessmentinfo, setAssessmentInfo] = useState([]);
  const [vitalsignsinfo, setVitalSignsInfo] = useState([]);

     useEffect(() => {
         getAssessmentDetails();

     }, [])

    const  getAssessmentDetails = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:8001/maternalhealth/assessment/${sessionId}`);
            setAssessmentInfo(response.data);
        
            if (response.data.vitalSign) {
              const vitalSignCreatedAtDate = new Date(response.data.vitalSign.createdAt).toISOString().split('T')[0];
              const assessmentCreatedAtDate = new Date(response.data.createdAt).toISOString().split('T')[0];
          
              if (vitalSignCreatedAtDate === assessmentCreatedAtDate) {
                setVitalSignsInfo(response.data.vitalSign);
              } else {
                setVitalSignsInfo([]);
              }
            } else {
              setVitalSignsInfo([]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    console.log("Assesment : ",assessmentinfo)
    console.log("Vitals : ",vitalsignsinfo)
    let session ={
        AGA:"N/A",
        Wght:"40",
        BP:"120/80 mmHg",
        FH:" 27 cm",
        FHB:"160 bpm",
        PPF:"Left Mento Anterior",
        FIN:"Normal vital signs, including blood pressure, heart rate, and respiratory rate, indicate a healthy pregnancy",
        NURSE:"Healthy"

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
            <Text style={styles.title}>PRENATAL EXAMINATION SESSION {sessionId.slice(-6)}</Text>
        </View>
        <View style={[styles.titleBox]}>
           <Text style={styles.cardTitle}>Session Findings</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Date :  </Text>{formatDate(assessmentinfo.dateOfVisitation)}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Assessment of Gestational Age: </Text>{assessmentinfo.aog}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Weight: </Text>{vitalsignsinfo? vitalsignsinfo.weight : ""}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Blood Pressure: </Text>{vitalsignsinfo? vitalsignsinfo.bloodpressure : ""}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Fundal Height: </Text>{assessmentinfo.fundalHeight}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Fetal Heart Beat: </Text>{assessmentinfo.fetalHeartBeat}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Presenting Part of Fetus: </Text>{assessmentinfo.partOfFetus}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Findings: </Text>{assessmentinfo.findings}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Nurses Notes: </Text>{assessmentinfo.nuresesNotes}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default PrenatalSession

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    body: {
        padding: 15,
       
      },
      title: {
        color: '#88EECC',
        fontSize: 25,
        marginBottom: 20,
        textAlign:'center'
        
       
      },
     
      titleBox: {
        backgroundColor:'white',
        borderRadius:5,
        marginTop: 20,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:
            {width: 0,
            height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      cardTitle:{
        color: 'black',
        fontSize: 20,
        textAlign:'center',
        padding:20,
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
   row:{
    paddingTop:10,
   }
})