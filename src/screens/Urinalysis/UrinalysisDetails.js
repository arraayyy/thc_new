import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

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
        <ScrollView style={styles.container}>
     <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={styles.title}>EXAMINATION {route.params.examID}</Text>
            <Text><Text style={{ fontWeight: 'bold' }}>PERFORMED BY: </Text>{exam.find(item => item.examID === route.params.examID)?.doc || 'Not found'}</Text>
        </View>
        <View style={[styles.titleBox]}>

           <Text style={styles.cardTitle}>Physicochemical Examination</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
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

        <View style={[styles.titleBox]}>
        <Text style={styles.cardTitle}>Microscopic Examination</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.rbc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.pusCells}</Text>
            </View>
        </View>

        <View style={[styles.titleBox]}>
        <Text style={styles.cardTitle}>Crystals</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.calOxa}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.amorUra}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.ua}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.amorPhos}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.triplePhos}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.othersCrys}</Text>
            </View>
        </View>

        <View style={[styles.titleBox]}>
        <Text style={styles.cardTitle}>Miscellaneous Structures</Text>
           <View style = {styles.lineStyle} />
            <View style={styles.cardBody}>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.sec}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.rec}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.bacteria}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.mucusThread}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name:  </Text>{patient.yeastCells}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.othersMisc}</Text>
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

export default UrinalysisDetails;