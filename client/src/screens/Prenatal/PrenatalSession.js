import { View, Text,ScrollView,StyleSheet,Dimensions,PixelRatio } from 'react-native'
import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { useNavigation,useRoute } from '@react-navigation/native';

const PrenatalSession = () => {
  const route = useRoute();
  const sessionId = route.params?.sessionId;
  
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
              <View style={styles.infoSection}>
                <Text style={styles.label}>Date: </Text>
                <Text style={styles.info}>{formatDate(assessmentinfo.dateOfVisitation)}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Assessment of Gestational Age: </Text>
                <Text style={styles.info}>{assessmentinfo.aog}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Weight: </Text>
                <Text style={styles.info}>{vitalsignsinfo ? vitalsignsinfo.weight : ""}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Blood Pressure: </Text>
                <Text style={styles.info}>{vitalsignsinfo ? vitalsignsinfo.bloodpressure : ""}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Fundal Height: </Text>
                <Text style={styles.info}>{assessmentinfo.fundalHeight}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Fetal Heart Beat: </Text>
                <Text style={styles.info}>{assessmentinfo.fetalHeartBeat}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Presenting Part of Fetus: </Text>
                <Text style={styles.info}>{assessmentinfo.partOfFetus}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Findings: </Text>
                <Text style={styles.info}>{assessmentinfo.findings}</Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.label}>Nurses Notes: </Text>
                <Text style={styles.info}>{assessmentinfo.nuresesNotes}</Text>
              </View>
              </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default PrenatalSession

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