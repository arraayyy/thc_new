import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import servicesDetails from '../../styles/ServicesDetails';

const PrenatalDetails = ({route}) => {
  const navigation = useNavigation();
  let patient = 
  {
    
      husband:"John Smith Doe",
      husOCP:"Security Guard",
      age: 24,
      birthdate: "09-10-1999",
      occupation: "N/A",
      address: "Minoza St. Tigbao, Talamban, Cebu City",
      gravida:"N/A",
      para:"N/A",
      NoFT:"N/A",
      NoAb:"N/A",
      NoPr:"N/A",
      NoCBA:"3",
      NoLC:" 2",
      NoStill:"N/A",
      LMP:"N/A",
      DateLD:"N/A",
      TypeLD:"N/A",
      mensflow:"N/A",
      hydmole:"N/A",
      HEP:"N/A",
      HLP:"N/A",
      DIA:"N/A",
      ill:"Cough",
      algr:"lorems ipsum lorem",
      PH:"Health Center",
      TTS:{
          TT1:"03-04-23",
          TT2:"03-04-23",
          TT3:"03-04-23",
          TT4:"03-04-23",
          TT5:"03-04-23",
      },
      Urine:"Normal",
      CBC:"Normal",
      BT:"Normal",
      HBS:"Normal",
      PPC:"N/A",
  };
  let session =[
    {examID:1, doc:"Dr.Doe", date:'01-23-2023'},
    {examID:2, doc:"Dr.Jane", date:'02-24-2023'},
    {examID:3, doc:"Dr.Smith", date:'03-25-2023'},
    {examID:4, doc:"Dr.John", date:'04-26-2023'}
  ];

    return (
    <ScrollView style={servicesDetails.container}>
      <View style={servicesDetails.body}>
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={servicesDetails.title}>EXAMINATION {route.params.examID}</Text>
        </View>
        <View style={[servicesDetails.titleBox]}>
          <Text style={servicesDetails.cardTitle}>Personal Information</Text>
          <View style = {servicesDetails.lineStyle} />
          <View style={servicesDetails.cardBody}>
              <Text><Text style={{fontWeight:'bold'}}>Husband's Name :  </Text>{patient.husband}</Text>
              <Text><Text style={{fontWeight:'bold'}}>Husband's Occupation: </Text>{patient.husOCP}</Text>
          </View>
        </View>
        <View style={[servicesDetails.titleBox]}>
          <Text style={servicesDetails.cardTitle}>Obstetrical Information</Text>
          <View style = {servicesDetails.lineStyle} />
          <View style={[servicesDetails.cardBody]} >
            <Text><Text style={{fontWeight:'bold'}}>Gravida :  </Text>{patient.gravida}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Para "(Parity)": </Text>{patient.para}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>No. of Full Term :  </Text>{patient.NoFT}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No. of Abortion : </Text>{patient.NoAb}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>No. of Premature :  </Text>{patient.NoPr}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No of Children Born : </Text>{patient.NoCBA}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>No. of Living Children:  </Text>{patient.NoLC}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>No of Stillbirths: </Text>{patient.NoStill}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>Date of Last Delivery :  </Text>{patient.DateLD}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Type of Last Delivery: </Text>{patient.TypeLD}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>Menstrual Flow :  </Text>{patient.mensflow}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>Hydatidiform mole: </Text>{patient.hydmole}</Text>
               
            <Text><Text style={{fontWeight:'bold'}}>History of Ectopic Pregnancy:  </Text>{patient.HEP}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>History of Large Babies : </Text>{patient.HLP}</Text>
                
            <Text><Text style={{fontWeight:'bold'}}>Diabetes:  </Text>{patient.DIA}</Text>
            <Text ><Text style={{fontWeight:'bold'}}>LMP : </Text>{patient.LMP}</Text>
          </View>
        </View>
        <View style={[servicesDetails.titleBox]}>
          <Text style={servicesDetails.cardTitle}>Medical History</Text>
          <View style = {servicesDetails.lineStyle} />
          <View style={servicesDetails.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Previous Illness :  </Text>{patient.ill}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Allergy : </Text>{patient.algr}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Previous Hospitalization: </Text>{patient.PH}</Text>
          </View>
        </View>
        <View style={[servicesDetails.titleBox]}>
          <Text style={servicesDetails.cardTitle}>Tetanus Toxoid Status</Text>
          <View style = {servicesDetails.lineStyle} />
          <View style={servicesDetails.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Tetanus Toxoid 1 :  </Text>{patient.TTS.TT1}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Tetanus Toxoid 2: </Text>{patient.TTS.TT2}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Tetanus Toxoid 3: </Text>{patient.TTS.TT3}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Tetanus Toxoid 4: </Text>{patient.TTS.TT4}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Tetanus Toxoid 5: </Text>{patient.TTS.TT5}</Text>
            <Text><Text style={{fontWeight:'bold'}}>FIM: </Text></Text>
          </View>
        </View>
        <View style={[servicesDetails.titleBox]}>
          <Text style={servicesDetails.cardTitle}>Laboratory Examination</Text>
          <View style = {servicesDetails.lineStyle} />
          <View style={servicesDetails.cardBody}>
            <Text><Text style={{fontWeight:'bold'}}>Urinalysis Results :  </Text>{patient.Urine}</Text>
            <Text><Text style={{fontWeight:'bold'}}>CBC Results: </Text>{patient.CBC}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Blood Typing Results: </Text>{patient.BT}</Text>
            <Text><Text style={{fontWeight:'bold'}}>HBS Antigen Results: </Text>{patient.HBS}</Text>
            <Text><Text style={{fontWeight:'bold'}}>Previous Pregnancy Complications: </Text>{patient.PPC}</Text>
          </View>
        </View>
        <View style={{marginTop: 20,paddingLeft:10}}>
          <Text style={[servicesDetails.title,{fontSize:20, fontWeight:'bold'}]}>SESSION FINDINGS</Text>
        </View> 
        {session.map((value,indx)=>{
          return(
            <Card containerStyle={servicesDetails.card} key={indx}>
                <TouchableOpacity onPress={()=> navigation.navigate("Prenatal Session",value)}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                    <Text style={servicesDetails.cardRow}>Session {value.examID}</Text>
                    <Text style={servicesDetails.cardRow}>{value.doc}</Text>
                    <Text style={servicesDetails.cardRow}>{value.date}</Text>
                    <Icon style={[servicesDetails.icon]} name='angle-right' size={23} color='#3e4240' />
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

export default PrenatalDetails
