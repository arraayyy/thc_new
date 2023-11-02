import { View, Text,ScrollView,StyleSheet,Dimensions,PixelRatio } from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { useNavigation,useRoute } from '@react-navigation/native';

const FamilyPlanningSession = () => {
  const route = useRoute();
  const sessionId = route.params?.sessionId;
  const [assessmentinfo, setAssessmentInfo] = useState([]);
  const [vitalsignsinfo, setVitalSignsInfo] = useState([]);

  useEffect(() => {
    getAssessmentDetails();
  }, [])

  const  getAssessmentDetails = async () => {
    try {
        const response = await axios.get(`http://10.0.2.2:8001/familyplanning/assessment/${sessionId}`);
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
  
   const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>FAMILY PLANNING ASSESSMENT {sessionId.slice(-6)}</Text>
        </View>
        <View style={[styles.titleBox]}>
           <Text style={styles.cardTitle}>Session Findings</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text style={styles.row}><Text style={{ fontWeight: 'bold' }}>Date of Visit:  </Text>{formatDate(assessmentinfo.dateOfVisitation)}</Text>
                <Text style={styles.row}><Text style={{ fontWeight: 'bold' }}>Name of Service Provider:  </Text>{assessmentinfo.serviceProvider}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Findings:  </Text>{assessmentinfo.findings}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Method Accepted:  </Text>{assessmentinfo.methodAccepted}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default FamilyPlanningSession

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
        textAlign:'center',
        fontWeight:'bold'
       
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