import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import servicesDetails from '../../styles/ServicesDetails';

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
        <ScrollView style={servicesDetails.container}>
     <View style={servicesDetails.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={servicesDetails.title}>EXAMINATION {route.params.examID}</Text>
        </View>
        <View style={[servicesDetails.titleBox]}>

           <Text style={servicesDetails.cardTitle}>Personal Information</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.name}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.sex}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Birthdate: </Text>{patient.birthdate}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.age}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.occupation}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.address}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
            <Text style={servicesDetails.cardTitle}>Session Findings</Text>
            <View style={servicesDetails.lineStyle} />
            <View style={[servicesDetails.cardBody]}>
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

export default MedicalCheckupDetails;