import { View, Text } from 'react-native'
import React from 'react'

const CustomHr = ({label}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:'25',}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
            <Text style={{paddingHorizontal:8, textAlign: 'center'}}>{label}</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black', }} />
      </View>
  )
}

export default CustomHr