import React, { useState } from 'react';
import axios from 'axios';
import { View,
        Text,
        TextInput, 
        TouchableOpacity,
        StyleSheet,
        Pressable,
        Platform,
        ScrollView
  } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dropdown from '../components/Dropdown';
import CustomInput from '../components/CustomInput';
import CustomHr from '../components/CustomHr';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

let eduAt =[ {id:1, name:'Elementary Level'},{id:2,name:'Elementary Graduate'},{id:3,name:'Vocational'},{id:4,name:'High School Level'},{    id:5, name:' High School Graduate'},{id:6,name:'College Level '},{id:7,name:'College Graduate'},{id:8,name:'Graduate School'}]
let rel =[ {id:1, name:'Father'},{id:2,name:'Mother'},{id:3,name:'Child'},{id:4,name:'Guardian'}]


const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfPassword] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [middle_name, setmiddle_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [male, setMale] = useState(false);
  const [female,setFemale] = useState(false);
  const [gender,setgender] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [date,setDate] = useState( new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [educAttainDis,seteducAttainDis] = useState(null);
  const [educAttain,seteducAttain] = useState(null);
  const [nationality, setnationality] = useState('');
  const [street, setstreet] = useState('');
  const [barangay, setBarangay] = useState('');
  const [municipality, setmunicipality] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [birthPlace, setbirthPlace] = useState('');
  const [occupation, setoccupation] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [civilStatus, setcivilStatus] = useState('');
  const [relationship, setrelationship] = useState('');
  const [relationshipDis, setrelationshipDis] = useState('');
  const navigation = useNavigation();
  

  const onEduSelect = (item) =>{
    seteducAttain(item.name);
    seteducAttainDis(item);

  }
  const onRelSelect = (item) =>{
    setrelationship(item.name);
    setrelationshipDis(item);

  }

  const toggleDatepicker = ()=>{
    setShowPicker(!showPicker);
  }

  const onChange =({type}, selectedDate) =>{
    if (type == "set"){
      const currentDate =selectedDate;
      setDate(currentDate);
      if(Platform.OS === "android"){
         toggleDatepicker();
         setbirthDate(currentDate.toDateString());

      }
    }else{
        toggleDatepicker();
    }
  }

  const genderMale=()=>{
    setMale(true);
    setFemale(false);
    setgender('Male');
  }

  const genderFemale=()=>{
    setMale(false);
    setFemale(true);
    setgender('Female');
  }

  const setZipCodeValue = (value) => {
   
    if (!isNaN(value)) {
      setzipCode(value.toString()); 
    }
  }

  const handleRegister = async () => {
    const requiredFields = [
      email, contactNo, first_name, last_name,
      relationship, password, gender, birthDate, birthPlace,
      educAttain, occupation, civilStatus, nationality, street, barangay,
      municipality, zipCode
    ];
  
    for (const field of requiredFields) {
      if (!field) {
        alert("Please fill in all fields.");
        return;
      }
    }
  
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const user_type = acc_type = "Resident";
    const acc_status = "Pending";
   
  
    try {
      const response = await axios.post('http://10.0.2.2:8001/account/register', {
        email, phone: contactNo, user_type, first_name, acc_type, last_name, middle_name, relationship, password, acc_status,
        gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus,
        nationality, street, barangay, municipality, zipCode
      });
     
      if (response.status === 200) {
        alert(response.data.message);
        navigation.navigate("Login");
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      alert("An unexpected error occurred");
      console.error(error);
    }
  };

  return (
    <ScrollView style={{marginTop:25}}>
      <Header height={150}/>
  
    <View style={styles.container}>
  
     <CustomHr label="Account Information"/>

        <CustomInput label="Email" value={email} setValue={setEmail} />
        <CustomInput
          label="Password"
          value={password}
          setValue={setPassword}
          isPassword={true} // Pass the isPassword prop
        />

        <CustomInput
          label="Confirm Password"
          value={confirmpassword}
          setValue={setconfPassword}
          isPassword={true} // Pass the isPassword prop
        />
        
        <CustomHr label="Personal Information"/> 
        
        <CustomInput label="First Name" value={first_name} setValue={setfirst_name} />
        <CustomInput label="Middle Name" value={middle_name} setValue={setmiddle_name} />
        <CustomInput label="Last Name" value={last_name} setValue={setlast_name} /> 
        
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Gender</Text>
          <View style={styles.check}>
            <CheckBox title="MALE" center  checked={male} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderMale}/>
            <CheckBox title="FEMALE" center checked={female} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderFemale}/>
          </View>

        {showPicker && (
            <DateTimePicker
              mode='date'
              display='spinner'
              value ={date}
              onChange={onChange}
            />
        )}
        <Text style={styles.label}>Birth Date</Text>
        {!showPicker &&(
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={styles.input}
              onChangeText={setbirthDate}
              value={birthDate}
              editable ={false}
            />
          </Pressable>
        )}

        <Text style={styles.label}>Educational Attainment</Text> 
          <View style={styles.padd}>
              <Dropdown 
              value={educAttainDis}
                data ={eduAt}
                onSelect={onEduSelect} 
              />
          </View>
       <Text style={styles.label}>Relationship</Text> 
          <View style={styles.padd}>
              <Dropdown 
              value={relationshipDis}
                data ={rel}
                onSelect={onRelSelect} 
              />
        </View> 
       <CustomInput label="Birth Place" value={birthPlace} setValue={setbirthPlace} />
       <CustomInput label="Occupation" value={occupation} setValue={setoccupation} />
       <CustomInput label="Contact Number" value={contactNo} setValue={setcontactNo} />
       <CustomInput label="Civil Status" value={civilStatus} setValue={setcivilStatus} />
       <CustomInput label="Nationality" value={nationality} setValue={setnationality} />


        <CustomHr label="Address Information"/>

        <CustomInput label="House Number,Street/street" value={street} setValue={setstreet} />
        <CustomInput label="Barangay" value={barangay} setValue={setBarangay} />
        <CustomInput label="Municipality (e.g.Cebu City)" value={municipality} setValue={setmunicipality} />
        <CustomInput label="ZipCode" value={zipCode} setValue={setZipCodeValue} />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <View style={styles.accTextContainer}>
          <Text style={styles.accText}>Already have an account? </Text>
          <Text 
          style={styles.loginText}
          onPress={() => navigation.navigate("Login")}
          >Log-in</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
 
  label: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 35,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '80%', // Set the width of the button container to 80%
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#15876C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  accTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  accText: {
    fontSize: 14,
    color: '#AEAEAE',
  },
  loginText: {
    fontSize: 14,
    color: '#6EC1B1',
  },
 check:{
  flexDirection: "row",
  paddingLeft: 35,
 },
 padd:{
  paddingLeft: 35,
  paddingRight: 35,
 }
});

export default Register;
