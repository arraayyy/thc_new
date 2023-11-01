import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue,label}) => {
  return (
    <View >
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
      />  
    </View>
  )
}
const styles =StyleSheet.create({
 
  input:{
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
  label:{
    color: '#AEAEAE' ,
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 35,
},
});
export default CustomInput