import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import servicesSession from '../../styles/ServicesSession'    

const ImmunizationSession = ({route}) => {
    let session ={
      DG:"03-15-23",
        Wght:"56 kg",
        Hght:"158 cm",
        Temp:"36.6 Celsius",
        FIN:"Normal vital signs, including blood pressure, heart rate, and respiratory rate, indicate a healthy baby",
        NURSE:"Healthy"

    }
  return (
    <ScrollView style={servicesSession.container}>
     <View style={servicesSession.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={servicesSession.title}>IMMUNIZATION EXAMINATION 1 SESSION {route.params.examID}</Text>
        </View>
        <View style={[servicesSession.titleBox]}>
           <Text style={servicesSession.cardTitle}>Session Findings</Text>
           <View style = {servicesSession.lineStyle} />
            <View style={servicesSession.cardBody}>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Date :  </Text>{session.date}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Weight: </Text>{session.Wght}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Height: </Text>{session.Hght}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Temperature: </Text>{session.Temp}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Findings: </Text>{session.FIN}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Nurses Notes: </Text>{session.NURSE}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default ImmunizationSession
