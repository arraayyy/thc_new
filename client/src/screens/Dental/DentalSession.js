import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const DentalSession = ({route}) => {
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
    <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>PRENATAL EXAMINATION 1 SESSION {route.params.examID}</Text>
        </View>
        <View style={[styles.titleBox]}>
           <Text style={styles.cardTitle}>Session Findings</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Date :  </Text>{session.date}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Assessment of Gestational Age: </Text>{session.AGA}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Weight: </Text>{session.Wght}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Blood Pressure: </Text>{session.BP}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Fundal Height: </Text>{session.FH}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Fetal Heart Beat: </Text>{session.FHB}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Presenting Part of Fetus: </Text>{session.PPF}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Findings: </Text>{session.FIN}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Nurses Notes: </Text>{session.NURSE}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default DentalSession

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
        textAlign:'center'
        
       
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