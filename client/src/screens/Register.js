import React, { useState } from 'react';
import axios from 'axios';
import { View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dropdown from '../components/Dropdown';
import CustomInput from '../components/CustomInput';
import CustomHr from '../components/CustomHr';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


let eduAt =[ {id:1, name:'Elementary Level'},{id:2,name:'Elementary Graduate'},{id:3,name:'Vocational'},{id:4,name:'High School Level'},{    id:5, name:' High School Graduate'},{id:6,name:'College Level'},{id:7,name:'College Graduate'},{id:8,name:'Graduate School'}]
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
  const [birthDate, setbirthDate] = useState(new Date());
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
  const [civilStatusDis, setCivilStatusDis] = useState(null);
  const [relationship, setrelationship] = useState('');
  const [relationshipDis, setrelationshipDis] = useState('');
  const [isResident, setIsResident] = useState(true);
  const navigation = useNavigation();
  
  

  const onEduSelect = (item) =>{
    seteducAttain(item.name);
    seteducAttainDis(item);

  }
  const onRelSelect = (item) =>{
    setrelationship(item.name);
    setrelationshipDis(item);

  }

  const onResident =() =>{
    setIsResident(true);
    setBarangay("Talamban");
    setmunicipality("Cebu City");
    setzipCode('6000');
  }

  const nonResident =() =>{
    setIsResident(false);
    setBarangay('');
    setmunicipality('');
    setzipCode('');
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
    
  

  const isEmailValid = (email) => {
    // Regular expression to match a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Regular expression to enforce password requirements (e.g., minimum length, special characters)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const civilStatusOptions = [
    { id: 1, name: 'Single' },
    { id: 2, name: 'Married' },
    { id: 3, name: 'Divorced' },
    { id: 4, name: 'Widowed' },
    { id: 5, name: 'Separated' },
    // Add more civil status options as needed
  ];

  const onCivilStatusSelect = (item) => {
    setcivilStatus(item.name);
    setCivilStatusDis(item);
  };

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

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address without spaces");
      return;
    }

    if (!isPasswordValid(password)) {
      alert("Please enter a valid password.");
      return;
    }
  
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const user_type = acc_type = "Resident";
    const acc_status = "Pending";
   
  
    try {
      const response = await axios.post('/account/register', {
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
        
        <Text style={styles.label}>Password</Text>
        <CustomInput
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
        <Text style={[styles.passwordRequirement,{fontWeight:'bold'}]}>
         NOTE : Password Requirement
        </Text>
        <Text style={styles.passwordRequirement}>
          {'\u2022'} Minimum 8 characters
        </Text>
        <Text style={styles.passwordRequirement}>
          {'\u2022'} At least one uppercase letter
        </Text>
        <Text style={styles.passwordRequirement}>
          {'\u2022'} At least one lowercase letter
        </Text>
        <Text style={styles.passwordRequirement}>
          {'\u2022'} At least one digit
        </Text>
        <Text style={styles.passwordRequirement}>
          {'\u2022'} At least one special character 
        </Text>
        <Text style={[styles.passwordRequirement,{paddingBottom:20}]}>
          {'\u2022'} No spaces 
        </Text>

        <CustomHr label="Personal Information"/> 
        
        <CustomInput label="First Name" value={first_name} setValue={setfirst_name} />
        <CustomInput label="Middle Name" value={middle_name} setValue={setmiddle_name} />
        <CustomInput label="Last Name" value={last_name} setValue={setlast_name} /> 
        
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Gender</Text>
          <View style={styles.check}>
            <CheckBox title="MALE" center  checked={male} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderMale}/>
            <CheckBox title="FEMALE" center checked={female} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={genderFemale}/>
          </View>

          <Text style={styles.label}>Birth Date</Text>
          <View style={styles.padd}>
            <TouchableOpacity // Open the date picker on touch
              style={styles.datePickerContainer}
              onPress={() => setShowPicker(true)}
            >
            <Text>{birthDate.toDateString()}</Text>
            </TouchableOpacity>
            {showPicker && (
              <DateTimePicker
              value={birthDate}
              mode="date"
              display="spinner"
              maximumDate={new Date()} // Set the maximum date to the current date
              onChange={(event, selectedDate) => {
                setShowPicker(false); // Close the date picker
                if (selectedDate) {
                  setbirthDate(selectedDate);
                }
              }}
            />
            )}
            </View>
        <Text style={styles.label}>Educational Attainment</Text> 
          <View style={styles.padd}>
              <Dropdown 
              value={educAttainDis}
                data ={eduAt}
                onSelect={onEduSelect} 
              />
          </View>
       <Text style={styles.label}>Family Role</Text> 
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
       
       <Text style={styles.label}>Civil Status</Text>
       <View style={styles.padd}>
              <Dropdown
                value={civilStatusDis}
                data={civilStatusOptions}
                onSelect={onCivilStatusSelect}
       />
        </View>
       <CustomInput label="Nationality" value={nationality} setValue={setnationality} />


        <CustomHr label="Address Information"/>

        <CustomInput label="House Number/Street/Sitio" value={street} setValue={setstreet} />
        <Text style={styles.label}>
          Are you a {isResident ? "Resident" : "Non-Resident"} of Barangay Talamban?
        </Text>
        <View style={styles.residentButtons}>
          <TouchableOpacity
            style={[
              styles.residentButton,
              isResident && styles.selectedButton,
            ]}
            onPress={() => onResident()}
          >
            <Text style={isResident ? styles.selectedText : [styles.buttonText,{color:"#15876C"}]}>
              Resident
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.residentButton,
              !isResident && styles.selectedButton,
            ]}
            onPress={() => nonResident()}
          >
            <Text style={!isResident ? styles.selectedText : [styles.buttonText,{color:"#15876C"}]}>
              Non-Resident
            </Text>
          </TouchableOpacity>
        </View>

        {!isResident && (
          <>
            <CustomInput label="Barangay" value={barangay} setValue={setBarangay} />
            <CustomInput label="Municipality (e.g. Cebu City)" value={municipality} setValue={setmunicipality} />
            <CustomInput label="Zip Code" value={zipCode} setValue={setZipCodeValue} />
          </>
        )}
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
    color: '#AEAEAE',
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
 },
 datePickerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  height:40,
  borderColor: 'gray',
  borderRadius: 5,
  marginBottom: 10,
  padding: 10,
},
passwordRequirement: {
  color: '#AEAEAE',
  fontSize: 12,
  paddingLeft: 35,
},
residentButtons: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 35,
  marginBottom: 10,
},
residentButton: {
  flex: 1,
  height: 40,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: 5,
  borderWidth: 1,
  borderColor: "#15876C",
},
selectedButton: {
  backgroundColor: "#15876C",
},

selectedText: {
  fontSize: 16,
  color: "white",
},
});

export default Register;