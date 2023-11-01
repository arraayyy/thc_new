import { View, Text, ScrollView ,StyleSheet,  Dimensions,PixelRatio} from 'react-native'
import React from 'react'


const DentalDetails = ({route}) => {
  const patient = 
    {
        fname: "John",
        lname: "Doe",
        mname: "Smith",
        age: 24,
        sex:"Male",
        birthdate: "09-10-1999",
        occupation: "N/A",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        pod:"Cebu City",
        doe:"07-14-2021",
        dc:"Yes",
        gin:"Yes",
        pd:"No",
        deb:"Yes",
        cal:"No",
        ag:"Yes",
        cp:"No",
        bp:"120/80 mmHg",
        pr:"80 bpm",
        nptp:"28",
        npst:"2",
        ndt:"0",
        nmt:"2",
        nft:"5",
        tdmft:"5",
        nttp:"2",
        ntst:"0",
        tot:"30",
        ill:"N/A",
        all:"N/A",
        hos:"N/A",
        ssbf:"Yes",
        fta:"Sometimes",
        ftt:"Never"
    };

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
              <Text><Text style={{fontWeight:'bold'}}>Name :  </Text>{patient.fname + " "+ patient.mname + " " + patient.lname}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Sex: </Text>{patient.sex}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Date of Birth: </Text>{patient.birthdate}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.age}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Place of Birth: </Text>{patient.pod}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.occupation}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.address}</Text>
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Oral Health Condition</Text>
          <View style = {styles.lineStyle} />
          <View style={[styles.cardBody]} >
            <Text><Text style={{fontWeight:'bold'}}>Date of Oral Examination:  </Text>{patient.doe}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Dental Caries: </Text>{patient.dc}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>Gingivitis:  </Text>{patient.gin}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Periodontal Disease: </Text>{patient.pd}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>Debris:  </Text>{patient.deb}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Calculus: </Text>{patient.cal}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>Abnormal Growth: </Text>{patient.ag}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Cleft Lip/Palate: </Text>{patient.cp}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>No. of  Permanent Teeth Present:  </Text>{patient.nptp}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No. of Permanent Sound Teeth: </Text>{patient.npst}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>No. of Decayed Teeth:  </Text>{patient.ndt}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No. of Missing Teeth: </Text>{patient.nmt}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>Total DMF Teeth:  </Text>{patient.tdmft}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No. of Temporary Teeth Present: </Text>{patient.nttp}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>No. of Temporary Sound Teeth:  </Text>{patient.ntst}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No. of Filled Teeth: </Text>{patient.nft}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Total of Teeth:  </Text>{patient.tot}</Text>
            
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Physical Examnination</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Blood Pressure:  </Text>{patient.bp}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Pulse Rate: </Text>{patient.pr}</Text>
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Medical History</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Previous Illness :  </Text>{patient.ill}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Allergy : </Text>{patient.all}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Previous Hospitalization: </Text>{patient.hos}</Text>
          </View>
        </View>
        <View style={[styles.titleBox]}>
          <Text style={styles.cardTitle}>Dietary Habits</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Sugar Sweetened Beverages/Food:  </Text>{patient.ssbf}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Frequency of taking Alcohol: </Text>{patient.fta}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Frequency of taking Tobacco:</Text>{patient.ftt}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default DentalDetails

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