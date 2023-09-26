import React, { useState } from 'react';
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

let eduAt =[ {id:1, name:'Elementary Level'},{id:2,name:'Elementary Graduate'},{id:3,name:'Vocational'},{id:4,name:'High School Level'},{    id:5, name:' High School Graduate'},{id:6,name:'College Level '},{id:7,name:'College Graduate'},{id:8,name:'Graduate School'},]

const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfPassword] = useState('');
  const [fname, setFName] = useState('');
  const [mname, setMName] = useState('');
  const [lname, setLName] = useState('');
  const [male, setMale] = useState(false);
  const [female,setFemale] = useState(false);
  const [sex,setSex] = useState('');
  const [dateOfBirth, setDateofBirth] = useState('');
  const [date,setDate] = useState( new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectItem,setSelectItem] = useState(null);
  const [nat, setNat] = useState('');
  const [sitio, setSitio] = useState('');
  const [barangay, setBarangay] = useState('');
  const [muncp, setMuncp] = useState('');
  const [prov, setProv] = useState('');
  const [zip, setZip] = useState('');
  const navigation = useNavigation();


  const onSelect = (item) =>{
    setSelectItem(item);

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
         setDateofBirth(currentDate.toDateString());

      }
    }else{
        toggleDatepicker();
    }
  }

  const sexMale=()=>{
    setMale(true);
    setFemale(false);
    setSex('Male');
  }

  const sexFemale=()=>{
    setMale(false);
    setFemale(true);
    setSex('Female');
  }
  const handleRegister = () => {
    // Implement your register logic here
    console.log('Email:', email);
    console.log('Password:', password);
    alert("You have Successfully Registered!");
    navigation.navigate("Login");

  };

  return (
    <ScrollView style={{marginTop:25}}>
      <Header height={150}/>
  
    <View style={styles.container}>
  
     <CustomHr label="Account Information"/>

        <CustomInput label="Email" value={email} setValue={setEmail} />
        <CustomInput label="Password" value={password} setValue={setPassword} />
        <CustomInput label="Confirm Password" value={confirmpassword} setValue={setconfPassword} />
        
        <CustomHr label="Personal Information"/> 
        
        <CustomInput label="First Name" value={fname} setValue={setFName} />
        <CustomInput label="Middle Name" value={mname} setValue={setMName} />
        <CustomInput label="Last Name" value={lname} setValue={setLName} /> 
        
        <Text style={[styles.label, { color: '#AEAEAE' }]}>Sex</Text>
          <View style={styles.check}>
            <CheckBox title="MALE" center  checked={male} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={sexMale}/>
            <CheckBox title="FEMALE" center checked={female} checkedIcon="dot-circle-o" uncheckedIcon="circle-o" onPress={sexFemale}/>
          </View>

        {showPicker && (
            <DateTimePicker
              mode='date'
              display='spinner'
              value ={date}
              onChange={onChange}
            />
        )}
        <Text style={styles.label}>Birthdate</Text>
        {!showPicker &&(
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={styles.input}
              onChangeText={setDateofBirth}
              value={dateOfBirth}
              editable ={false}
            />
          </Pressable>
        )}

        <Text style={styles.label}>Educational Attainment</Text> 
          <View style={styles.padd}>
              <Dropdown 
              value={selectItem}
                data ={eduAt}
                onSelect={onSelect} 
              />
          </View>
        
        <CustomInput label="Nationality" value={nat} setValue={setNat} />


        <CustomHr label="Address Information"/>

        <CustomInput label="House Number,Street/Sitio" value={sitio} setValue={setSitio} />
        <CustomInput label="Barangay" value={barangay} setValue={setBarangay} />
        <CustomInput label="Municipality" value={muncp} setValue={setMuncp} />
        <CustomInput label="Province" value={prov} setValue={setProv} />
        <CustomInput label="Zip Code" value={zip} setValue={setZip} />

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
    color: '#88EECC',
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
