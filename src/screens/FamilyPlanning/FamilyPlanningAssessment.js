import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'

const PrenatalSession = ({route}) => {
    let assessment ={
        findings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl ",
        methodAccepted: "Pills",
    }
  return (
    <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>FAMILY PLANNING RECORD 1 ASSESSMENT {route.params.examID}</Text>
        </View>
        <View style={[styles.titleBox]}>
           <Text style={styles.cardTitle}>Session Findings</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Date of Visit:  </Text>{assessment.date}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Name of Service Provider:  </Text>{assessment.doc}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Findings:  </Text>{assessment.findings}</Text>
                <Text style={styles.row}><Text style={{fontWeight:'bold'}}>Method Accepted:  </Text>{assessment.methodAccepted}</Text>
            </View>
        </View>
      </View>
     </ScrollView>   
  )
}

export default PrenatalSession

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