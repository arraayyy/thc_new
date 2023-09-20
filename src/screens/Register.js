import React, { useState } from 'react';
import { View,
        Text,
        TextInput, 
        TouchableOpacity,
        StyleSheet,
        Pressable,
        Platform
  } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dropdown from '../components/Dropdown';


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
  };

  return (
    <View style={styles.container}>
  

     <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom:'20'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
            <Text style={{paddingHorizontal:8, textAlign: 'center'}}>Account Information</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      {/* Label for Email */}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      
      {/* Label for Password */}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      
      {/* Label for Confirm Password */}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={text => setconfPassword(text)}
        value={confirmpassword}
      />

      
      <View style={{flexDirection: 'row', alignItems: 'center',paddingBottom:'20'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
            <Text style={{paddingHorizontal:8, textAlign: 'center'}}>Personal Information</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

       {/* Label for First Name */}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setFName(text)}
        value={fname}
      />

       {/* Label for Middle Name*/}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Middle Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setMName(text)}
        value={mname}
      />

       {/* Label for Last Name */}
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setLName(text)}
        value={lname}
      />
      
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
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Birthdate</Text>
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

      
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Educational Attainment</Text> 
      <View style={styles.padd}>
      <Dropdown 
       value={selectItem}
        data ={eduAt}
        onSelect={onSelect} 
      />
      </View>
      
      
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Nationality</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setNat(text)}
        value={nat}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom:'20'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
            <Text style={{paddingHorizontal:8, textAlign: 'center'}}>Address Information</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      
      <Text style={[styles.label, { color: '#AEAEAE' }]}>House Number,Street/Sitio</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setSitio(text)}
        value={sitio}
      />
     <Text style={[styles.label, { color: '#AEAEAE' }]}>Barangay</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setBarangay(text)}
        value={barangay}
      />
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Municipality</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setMuncp(text)}
        value={muncp}
      />
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Province</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setProv(text)}
        value={prov}
      />
      <Text style={[styles.label, { color: '#AEAEAE' }]}>Zip Code</Text> 
      <TextInput
        style={styles.input}
        onChangeText={text => setZip(text)}
        value={zip}
      />


      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      <View style={styles.accTextContainer}>
        <Text style={styles.accText}>Already have an account? </Text>
        <Text style={styles.loginText}>Log-in</Text>
      </View>
      
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
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
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#88EECC',
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
