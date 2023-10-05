import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

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
        <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>EXAMINATION {route.params.examID}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>PERFORMED BY: </Text>{exam.find(item => item.examID === route.params.examID)?.doc || 'Not found'}</Text>
        </View>
        <View style={[styles.titleBox]}>

           <Text style={styles.cardTitle}>Results</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
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

        <View style={[styles.titleBox]}>
        <Text style={styles.cardTitle}>Remarks</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.remarks}</Text>
            </View>
        </View>
       
      </View>
        </ScrollView>
      );
}

const width = Dimensions.get('window').width -40;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
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
    borderRadius: 5,
    marginTop: 10,
    alignItems:'center',
    // shadowColor:'black',
    // shadowOffset:
    //     {width: 0,
    //     height: 2,},
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  cardTitle:{
    color: 'black',
    fontSize: 20,
    padding:20,
  },
  lineStyle:{
    width:width-70,
    borderWidth: 0.1,
    backgroundColor:'black',
    height: 1,
  },
  cardBody:{
    padding:30,
  },
  card:{
    backgroundColor:'#91E0CE',
    marginLeft:0,
    width: width ,
    borderRadius:10,
    borderWidth:1,
    shadowColor:'#566e66',
        shadowOffset:
            {width: 0,
            height: 1,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
  }, 
  cardRow:{
    fontSize:getFontSize(15), 
    color:'#44AA92',
    fontWeight:'bold',
    justifyContent: 'center'
  } 
})

export default HematologyDetails