import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const PrenatalSession = () => {
  const route = useRoute();
  const sessionId = route.params?.sessionId;

  const [assessmentinfo, setAssessmentInfo] = useState([]);
  const [vitalsignsinfo, setVitalSignsInfo] = useState([]);

  useEffect(() => {
    getAssessmentDetails();
  }, []);

  const getAssessmentDetails = async () => {
    try {
      const response = await axios.get(`/maternalhealth/assessment/${sessionId}`);
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
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={{ marginTop: 20, paddingLeft: 10 }}>
          <Text style={styles.title}>PRENATAL EXAMINATION SESSION {sessionId.slice(-6)}</Text>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Session Findings</Text>
          <View style={styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text style={styles.row}><Text style={styles.label}>Date: </Text> {formatDate(assessmentinfo.dateOfVisitation)}</Text>
            <Text style={styles.row}><Text style={styles.label}>Assessment of Gestational Age: </Text> {assessmentinfo.aog}</Text>
            <Text style={styles.row}><Text style={styles.label}>Weight: </Text> {vitalsignsinfo ? vitalsignsinfo.weight : ''}</Text>
            <Text style={styles.row}><Text style={styles.label}>Blood Pressure: </Text> {vitalsignsinfo ? vitalsignsinfo.bloodpressure : ''}</Text>
            <Text style={styles.row}><Text style={styles.label}>Fundal Height: </Text> {assessmentinfo.fundalHeight}</Text>
            <Text style={styles.row}><Text style={styles.label}>Fetal Heart Beat: </Text> {assessmentinfo.fetalHeartBeat}</Text>
            <Text style={styles.row}><Text style={styles.label}>Presenting Part of Fetus: </Text> {assessmentinfo.partOfFetus}</Text>
            <Text style={styles.row}><Text style={styles.label}>Findings: </Text> {assessmentinfo.findings}</Text>
            <Text style={styles.row}><Text style={styles.label}>Nurses Notes: </Text> {assessmentinfo.nuresesNotes}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrenatalSession;

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
 row:{
   paddingTop:10,
 }
 
})