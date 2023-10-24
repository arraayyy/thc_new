import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import servicesDetails from '../../styles/ServicesDetails';

const UrinalysisDetails = ({route}) => {
    const navigation = useNavigation();
    let patient = {
        color: "Red",
        character: "Urine",
        rsu: "Strip",
        glucose: "Negative",
        bilirubin: "Negative",
        ketone: "Negative",
        specGrav: "1.005",
        blood: "Negative",
        phLvl: "6.0",
        protein: "Negative",
        urobilinogen: "Normal",
        nitrate: "Negative",
        leukocyte: "Negative",

        rbc: "Negative",
        pusCells: "Negative",

        calOxa: "Negative",
        amorUra: "Negative",
        ua: "Negative",
        amorPhos: "Negative",
        triplePhos: "Negative",
        othersCrys: "Negative",

        sec: "Negative",
        rec: "Negative",
        bacteria: "Negative",
        mucusThread: "Negative",
        yeastCells: "Negative",
        othersMisc: "Negative",

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

           <Text style={servicesDetails.cardTitle}>Physicochemical Examination</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.color}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.character}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Birthdate: </Text>{patient.rsu}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.glucose}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.bilirubin}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.ketone}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.specGrav}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Birthdate: </Text>{patient.blood}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.phLvl}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.protein}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.urobilinogen}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.nitrate}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.leukocyte}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
        <Text style={servicesDetails.cardTitle}>Microscopic Examination</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.rbc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.pusCells}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
        <Text style={servicesDetails.cardTitle}>Crystals</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.calOxa}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.amorUra}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.ua}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.amorPhos}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.triplePhos}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.othersCrys}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
        <Text style={servicesDetails.cardTitle}>Miscellaneous Structures</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={servicesDetails.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.sec}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.rec}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.bacteria}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.mucusThread}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.yeastCells}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.othersMisc}</Text>
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

export default UrinalysisDetails;