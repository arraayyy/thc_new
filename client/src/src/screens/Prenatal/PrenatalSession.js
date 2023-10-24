import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import servicesSession from '../../styles/ServicesSession'

const PrenatalSession = ({route}) => {
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
  return (
    <ScrollView style={servicesSession.container}>
     <View style={servicesSession.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={servicesSession.title}>PRENATAL EXAMINATION 1 SESSION {route.params.examID}</Text>
        </View>
        <View style={[servicesSession.titleBox]}>
           <Text style={servicesSession.cardTitle}>Session Findings</Text>
           <View style = {servicesSession.lineStyle} />
            <View style={servicesSession.cardBody}>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Date :  </Text>{session.date}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Assessment of Gestational Age: </Text>{session.AGA}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Weight: </Text>{session.Wght}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Blood Pressure: </Text>{session.BP}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Fundal Height: </Text>{session.FH}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Fetal Heart Beat: </Text>{session.FHB}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Presenting Part of Fetus: </Text>{session.PPF}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Findings: </Text>{session.FIN}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Nurses Notes: </Text>{session.NURSE}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default PrenatalSession

