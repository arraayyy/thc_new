import React,{Component, useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';


const Dropdown = ({data =[], value={}, onSelect =()=>{}
}) =>{
   
 const[showOptions,setShowOption]= useState(false);
 
 const onSelectItem=(val)=>{
    setShowOption(false)
    onSelect(val)
 }

 return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownStyle} activeOpacity={0.8} onPress={()=>setShowOption(!showOptions)}>
        <Text>{!!value? value?.name:'Choose an option'}</Text>
      </TouchableOpacity>
      {showOptions && (<View style={styles.optionRadius}>
      {data.map((val,i)=>{
        return(
            <TouchableOpacity 
                key={String(i)}
                onPress={()=>onSelectItem(val)}
                style={{backgroundColor: value?.id == val?.id?'#CCE8DE':'white',paddingVertical:8,borderRadius:4, paddingHorizontal:6,}}
            >
            <Text>{val.name}</Text>
            </TouchableOpacity>
        )
      })}
      </View>)}
    </View>
 );
};

const styles =StyleSheet.create({
          dropdownStyle:{
          backgroundColor:'rgba(250,250,250,0.2)',
          padding:8,
          borderRadius:6,
          minHeight:42,
          justifyContent:'center',
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom:6,
    },
    optionRadius:{
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    }
});
export default Dropdown;