import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const ImmunizationDetails = ({route}) => {
  const navigation = useNavigation();
  const patient = 
    {
        fname: "John",
        lname: "Doe",
        mname: "Smith",
        age: 24,
        birthdate: "09-10-1999",
        sex:"Male",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        bo:"2nd",
        POD:"Hospital Gov't/Private",
        motName:"Jane Smith Doe",
        motAge:"24 years old",
        motOcc:"N/A",
        motCon:"09876543210",
        fatName:"John Smith Doe",
        fatAge:"24 years old",
        fatOcc:"Security Guard",
        fatCon:"09876543210",
        bw:"2.4 kgs",
        tof:"Breast Feeding",
        donbs:"09-20-1999",
        Vac:{
            BCG:"03-04-23",
            HEPBV:"03-04-23",
            PCV1:"03-04-23",
            PCV2:"03-04-23",
            PCV3:"03-04-23",
            OPV1:"03-04-23",
            OPV2:"03-04-23",
            OPV3:"03-04-23",
            AMV:"03-04-23",
            PENTA1:"03-04-23",
            PENTA2:"03-04-23",
            PENTA3:"03-04-23",
            MMR:"03-04-23",
        }
    };
  const session =[
    {examID:1, doc:"Dr.Doe", date:'01-23-2023'},
    {examID:2, doc:"Dr.Jane", date:'02-24-2023'},
    {examID:3, doc:"Dr.Smith", date:'03-25-2023'},
    {examID:4, doc:"Dr.John", date:'04-26-2023'}
  ];

    return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={styles.title}>EXAMINATION {route.params.examID}</Text>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Personal Information</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
              <Text><Text style={{fontWeight:'bold'}}>Name : </Text>{patient.fname + " "+ patient.mname + " " + patient.lname}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.sex}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Date of Birth: </Text>{patient.birthdate}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.address}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Birth Order: </Text>{patient.bo}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Place of Delivery: </Text>{patient.POD}</Text>
            
              <Text><Text style={{fontWeight:'bold'}}>Mother’s Name: </Text>{patient.motName}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Mother’s Age: </Text>{patient.motAge}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Mother’s Occupation: </Text>{patient.motOcc}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Mother’s Contact: </Text>{patient.motCon}</Text>
             
              <Text><Text style={{fontWeight:'bold'}}>Father’s Name: </Text>{patient.fatName}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Father’s Age: </Text>{patient.fatAge}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Father’s Occupation: </Text>{patient.fatOcc}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Father’s Contact: </Text>{patient.fatCon}</Text>
              
              
              <Text><Text style={{fontWeight:'bold'}}>Birth Weight: </Text>{patient.bw}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Type of Feeding: </Text>{patient.tof}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Date of New Born Screening: </Text>{patient.donbs}</Text>
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Vaccine</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>BCG:  </Text>{patient.Vac.BCG}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Hep BV: </Text>{patient.Vac.HEPBV}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PCV 1: </Text>{patient.Vac.PCV1}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PCV 2: </Text>{patient.Vac.PCV2}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PCV 3: </Text>{patient.Vac.PCV3}</Text>
            <Text><Text style={{fontWeight:'bold'}}>OPV 1: </Text>{patient.Vac.OPV1}</Text>
            <Text><Text style={{fontWeight:'bold'}}>OPV 2: </Text>{patient.Vac.OPV2}</Text>
            <Text><Text style={{fontWeight:'bold'}}>OPV 3: </Text>{patient.Vac.OPV3}</Text>
            <Text><Text style={{fontWeight:'bold'}}>AMV: </Text>{patient.Vac.AMV}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PENTA 1: </Text>{patient.Vac.PENTA1}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PENTA 2: </Text>{patient.Vac.PENTA2}</Text>
            <Text><Text style={{fontWeight:'bold'}}>PENTA 3: </Text>{patient.Vac.PENTA3}</Text>
            <Text><Text style={{fontWeight:'bold'}}>MMR: </Text>{patient.Vac.MMR}</Text>
          </View>
        </View>
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={[styles.title,{fontSize:20, fontWeight:'bold'}]}>SESSION FINDINGS</Text>
        </View> 
        {session.map((value,indx)=>{
          return(
            <Card containerStyle={styles.card} key={indx}>
                <TouchableOpacity onPress={()=> navigation.navigate("Immunization Session",value)}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                    <Text style={styles.cardRow}>Session {value.examID}</Text>
                    <Text style={styles.cardRow}>{value.doc}</Text>
                    <Text style={styles.cardRow}>{value.date}</Text>
                    <Icon style={[styles.icon]} name='angle-right' size={23} color='#E0E2E1' />
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default ImmunizationDetails

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