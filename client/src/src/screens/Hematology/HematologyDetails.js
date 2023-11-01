import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import servicesDetails from '../../styles/ServicesDetails'; 

const HematologyDetails = ({route}) => {
    const navigation = useNavigation();
    let patient = {
       hematocritt: "0.0",
       hmc: "0.4",
       enc: "5.0",
       lnc: "0.0",
       snf: "0.0",
       lnf: "0.0",
       bnf: "0.0",
       stab: "0.0",
       tnc: "0.0",
       rnf: "0.0",

       remarks: "Normal",
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
            <Text><Text style={{ fontWeight: 'bold' }}>PERFORMED BY: </Text>{exam.find(item => item.examID === route.params.examID)?.doc || 'Not found'}</Text>
        </View>
        <View style={[servicesDetails.titleBox]}>

           <Text style={servicesDetails.cardTitle}>Results</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Hematocritt:  </Text>{patient.hematocritt}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Hemoglobin Mass Concentration: </Text>{patient.hmc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Erythrocyte Number Concentration: </Text>{patient.enc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Leukocyte Number Concentration: </Text>{patient.lnc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Segmenter Number Fraction: </Text>{patient.snf}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Lymphocyte Number Fraction: </Text>{patient.lnf}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Basophile Number Fraction: </Text>{patient.bnf}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Stab: </Text>{patient.stab}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Thrombocyte Number Concentration: </Text>{patient.tnc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Reticulocyte  Number Fraction: </Text>{patient.rnf}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
        <Text style={servicesDetails.cardTitle}>Remarks</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.remarks}</Text>
            </View>
        </View>
       
      </View>
        </ScrollView>
      );
}


export default HematologyDetails