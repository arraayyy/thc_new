import { View, Text, ScrollView ,StyleSheet, TouchableOpacity, Dimensions,PixelRatio} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import servicesDetails from '../../styles/ServicesDetails';

const FamilyPlanningDetails = ({route}) => {
    const navigation = useNavigation();
    let patient = {
        name: "Roe Ann Codoy",
        age: 24,
        birthdate: "09-10-1999",
        educAssess: "College Graduate",
        occupation: "N/A",
        address: "Minoza St. Tigbao, Talamban, Cebu City",
        contactNum: "09123456789",
        civilStatus: "Married",
        religion: "Roman Catholic",
        nameOfSpouse: "John Smith Doe",
        spouseAge: 54,
        spouseOcc: "Security Guard",
        numLC: 3,
        planMC: "Yes",
        avgMonthlyIncome: "N/A",
        medicalHistory: "N/A",
        gravida:"N/A",
        para:"N/A",
        NumFT:"N/A",
        NumAb:"N/A",
        NumPr:"N/A",
        NumCBA:"3",
        NumStill:"N/A",
        NumLB: 1,   
        LMP:"N/A",
        dateLD:" 2000-01-01",
        typeLD: "Cesarean Section",
        mensflow:"N/A",
        dysme: "N/A",
        hydmole:"N/A",
        HEP:"N/A",
        diabetes: "N/A",
        weight: 50, 
        height: 165,
        BP: 140,
        PR: 85,
        skin: "N/A",
        extremities: "N/A",
        conjunctive: "N/A",
        breast: "N/A",
        neck: "N/A",
        abdomen: "N/A",
        pelvic: "N/A",
    }

    let assessment =[
        {
            examID:1, doc:"Dr.Doe", date:'01-23-2023'
        },
        {
            examID:2, doc:"Dr.Jane", date:'02-24-2023'
        },
        {
            examID:3, doc:"Dr.Smith", date:'03-25-2023'
        },
        {
            examID:4, doc:"Dr.John", date:'04-26-2023'
        }
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
                <Text><Text style={{fontWeight:'bold'}}>Name :  </Text>{patient.name}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Age: </Text>{patient.age}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Birthdate: </Text>{patient.birthdate}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Educational Assessment: </Text>{patient.educAssess}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Occupation: </Text>{patient.occupation}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Address: </Text>{patient.address}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Contact Number: </Text>{patient.contactNum}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Civil Status: </Text>{patient.civilStatus}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Religion: </Text>{patient.religion}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Name of Spouse: </Text>{patient.nameOfSpouse}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Spouse Age: </Text>{patient.spouseAge}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Spouse Occupation: </Text>{patient.spouseOcc}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Number of Living Children: </Text>{patient.numLC}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Plan to have more children: </Text>{patient.planMC}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Average Monthly Income: </Text>{patient.avgMonthlyIncome}</Text>
                <Text><Text style={{fontWeight:'bold'}}>Medical History: </Text>{patient.medicalHistory}</Text>
            </View>
        </View>

        <View style={[servicesDetails.titleBox]}>
           <Text style={servicesDetails.cardTitle}>Obstetrical History</Text>
           <View style = {servicesDetails.lineStyle} />
            <View style={[servicesDetails.cardBody]} >
                    <Text><Text style={{fontWeight:'bold'}}>Gravida :  </Text>{patient.gravida}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Para "(Parity)": </Text>{patient.para}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No. of Full Term :  </Text>{patient.NumFT}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No. of Abortion : </Text>{patient.NumAb}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No. of Premature :  </Text>{patient.NumPr}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No of Children Born : </Text>{patient.NumCBA}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No. of Living Children:  </Text>{patient.numLC}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>No of Stillbirths: </Text>{patient.NumStill}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Date of Last Delivery :  </Text>{patient.dateLD}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Type of Last Delivery: </Text>{patient.typeLD}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Menstrual Flow :  </Text>{patient.mensflow}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Dysmenorrhea: </Text>{patient.dysme}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Hydatidiform mole: </Text>{patient.hydmole}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>History of Ectopic Pregnancy:  </Text>{patient.HEP}</Text>
                    <Text ><Text style={{fontWeight:'bold'}}>Diabetes:  </Text>{patient.diabetes}</Text>
                </View>
            </View>

            <View style={[servicesDetails.titleBox]}>
                <Text style={servicesDetails.cardTitle}>Physical Examination</Text>
                <View style = {servicesDetails.lineStyle} />
                <View style={servicesDetails.cardBody}>
                    <Text><Text style={{fontWeight:'bold'}}>Weight : </Text>{patient.weight}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Height: </Text>{patient.height}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Blood Pressure: </Text>{patient.BP}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Pulse Rate: </Text>{patient.PR}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Skin: </Text>{patient.skin}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Extremities: </Text>{patient.extremities}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Conjunctive: </Text>{patient.conjunctive}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Breast: </Text>{patient.breast}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Neck: </Text>{patient.neck}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Abdomen: </Text>{patient.abdomen}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>Pelvic: </Text>{patient.pelvic}</Text>
                </View>
             </View>
             
         <View style={{marginTop: 20,paddingLeft:10}}>
            <Text style={[servicesDetails.title,{fontSize:20, fontWeight:'bold'}]}>FAMILY PLANNING ASSESSMENTS</Text>
        </View> 
            {assessment.map((value,indx)=>{
                  return(
                    <Card containerStyle={servicesDetails.card}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Family Planning Assessment", { date: value.date, doctor: value.doc })}>    
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',  justifyContent: 'space-between'}}>
                            <Text style={servicesDetails.cardRow}>Assessment {value.examID}</Text>
                            <Text style={servicesDetails.cardRow}>{value.doc}</Text>
                            <Text style={servicesDetails.cardRow}>{value.date}</Text>
                            <Icon style={[servicesDetails.icon,{color:'white'}]} name='angle-right' size={30} color='#3e4240' />
                            </View>
                        </View>
                        </TouchableOpacity>
                    </Card>
                  )
            })}
      </View>
        </ScrollView>
      );
}

export default FamilyPlanningDetails;