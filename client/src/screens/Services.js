import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Dimensions,PixelRatio } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Header from '../components/Header'
const Services = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const profileId = route.params?.profileId;

  const onPrenatal = (profile_id) => {
    navigation.navigate("Prenatal", { profileId: profile_id});
  }
  return (
    <SafeAreaView style={{ height:height}}>
      <Header height={80}/>
      <View style={{alignItems: 'center'}}>
          <View style={styles.header}/>
          <View View style={{paddingTop:30}}>
            {/* <Icon name="briefcase-medical" size={50} color="#9ED5C5" /> */}
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => onPrenatal(profileId)}
                style={styles.servButton}>
                    <Text style={styles.servText}>Prenatal</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Immunization")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Immunization</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Family Planning")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Family Planning</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Dental")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Dental</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Medical Checkup")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Medical Check-up</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Hematology")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Hematology Test</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Urinalysis")}
                style={styles.servButton}>
                    <Text style={styles.servText}>Urinalysis Test</Text>
                </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Services
const width = Dimensions.get('window').width -40;
const height = Dimensions.get('window').height -40;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
const styles = StyleSheet.create({
   header:{
    marginTop:20,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#000',
    width:width-50,
  }, 
  container: { 
    paddingTop:2,
  },
  servButton: {
    paddingTop: 5,
    backgroundColor: '#F9F9F9',
    width: width-150,
    height: height-720,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:0.5,
    borderColor:'black'
  }, 
  servText:{
    paddingVertical:5,
    color: '#9ED5C5',
    fontWeight: 'bold',
    fontSize:getFontSize(17),
  }
})