import { View, Text, ScrollView ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const MedicalCheckupDetails = ({route}) => {
    const navigation = useNavigation();
    let patient = {
        name: "Roe Ann Codoy",
        sex: "Female",
        birthdate: "09-10-1999",
        age: 32,
        occupation: "Doctor",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        findings: "Normal heart rate, Normal blood pressure",
        presc: "Paracetamol",
    }

    let exam =[
        {
            examID:1, doc:"Dr.Doe", date:'01-23-2023'
        },
        {
            examID:2, doc:"Dr.Jane", date:'02-24-2023'
        },
    ];

    return (
        <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>EXAMINATION {route.params.examID}</Text>
        </View>
        <View style={[styles.titleBox]}>

           <Text style={styles.cardTitle}>Personal Information</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.name}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.sex}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Birthdate: </Text>{patient.birthdate}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.age}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.occupation}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.address}</Text>
            </View>
        </View>

        <View style={[styles.titleBox]}>
            <Text style={styles.cardTitle}>Session Findings</Text>
            <View style={styles.lineStyle} />
            <View style={[styles.cardBody]}>
                <Text>
                <Text style={{ fontWeight: 'bold' }}>Findings: </Text>
                {patient.findings}
                </Text>

                {/* Add margin at the bottom of "Findings" text */}
                <Text style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Prescription: </Text>
                {patient.presc}
                </Text>
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
   card:{
    backgroundColor:'#88EECC',
    marginLeft:0,
    width:350 ,
    borderRadius:10,
    borderWidth:1,
    borderColor: '#F9F9F9',
    shadowColor:'black',
        shadowOffset:
            {width: 0,
            height: 2,},
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

export default MedicalCheckupDetails;