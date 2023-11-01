import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import servicesSession from '../../styles/ServicesSession'

const PrenatalSession = ({route}) => {
    let assessment ={
        findings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl ",
        methodAccepted: "Pills",
    }
  return (
    <ScrollView style={servicesSession.container}>
     <View style={servicesSession.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={servicesSession.title}>FAMILY PLANNING RECORD 1 ASSESSMENT {route.params.examID}</Text>
        </View>
        <View style={[servicesSession.titleBox]}>
           <Text style={servicesSession.cardTitle}>Session Findings</Text>
           <View style = {servicesSession.lineStyle} />
            <View style={servicesSession.cardBody}>
                <Text style={servicesSession.row}><Text style={{ fontWeight: 'bold' }}>Date of Visit:  </Text>{route.params.date}</Text>
                <Text style={servicesSession.row}><Text style={{ fontWeight: 'bold' }}>Name of Service Provider:  </Text>{route.params.doctor}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Findings:  </Text>{assessment.findings}</Text>
                <Text style={servicesSession.row}><Text style={{fontWeight:'bold'}}>Method Accepted:  </Text>{assessment.methodAccepted}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default PrenatalSession
