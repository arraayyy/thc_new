import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState({});
  const [accountData, setAccountData] = useState({});

  useEffect(()=>{
    profileInformation();
    accountInformation();
  },[])

  const profileInformation = async () => {
    const profId = await AsyncStorage.getItem('ProfileId');

    try {
      const response = await axios.get(`http://10.0.2.2:8001/profile/${profId}`)
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const accountInformation = async () => {
    const accId = await AsyncStorage.getItem('accountId');

    try {
      const response = await axios.get(`http://10.0.2.2:8001/account/specaccount/${accId}`);
      setAccountData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const navigation = useNavigation();
  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile'); 
  };
  const navigateToEditAcc = () => {
    navigation.navigate('EditAcc');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          {/* Buttons */}
          <Icon name="users" size={20} color="white" style={styles.button} />
          <TouchableOpacity onPress={navigateToEditProfile}>
            <Icon name="edit" size={20} color="white" style={styles.button} />
            </TouchableOpacity>
          <TouchableOpacity onPress={navigateToEditAcc}>
            <Icon name="cog" size={20} color="white" style={styles.button} />
          </TouchableOpacity>
          <Icon name="sign-out" size={20} color="white" style={styles.button} />
        </View>
        {/* <Image
          source={require('../../assets/user.png')}
          style={styles.userIcon}
        /> */}
        <Text style={[styles.userName, { color: 'white' }]}>{profileData.first_name + " " + profileData.middle_name + " " + profileData.last_name}</Text>
        <View style={styles.userInfo}>
          <Icon name="envelope" size={20} color="white" style={styles.emailIcon} />
          <Text style={[styles.email, { color: 'white' }]}>{accountData.email? accountData.email: "N/A"}</Text>
        </View>
        <View style={styles.verification}>
          <View style={styles.verificationCircle}>
            {profileData.prof_status === "Active" ?(
              <Icon name="check-circle" size={20} color="#9ED5C5" style={styles.checkIcon} />
            ):null}
            <Text style={styles.verifiedText}>{profileData.prof_status === 'Active' ? 'Verified Resident' : 'Unverified Resident'}</Text>
          </View>
        </View>
      </View>

      {/* User Information Card */}
      <View style={styles.userInfoCard}>
        {/* Additional User Information */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Gender:</Text>
            <Text style={styles.userInfoValue}>{profileData.gender?profileData.gender: "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Age:</Text>
            <Text style={styles.userInfoValue}>{profileData.age?profileData.age+ "  Years Old": "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Education:</Text>
            <Text style={styles.userInfoValue}>{profileData.educAttain?profileData.educAttain: "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Occupation:</Text>
            <Text style={styles.userInfoValue}>{profileData.occupation?profileData.occupation: "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Contact:</Text>
            <Text style={styles.userInfoValue}>{profileData.contactNo?profileData.contactNo: "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Nationality:</Text>
            <Text style={styles.userInfoValue}>{profileData.nationality?profileData.nationality: "N/A"}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Address:</Text>
            <Text style={styles.userInfoValue}>{profileData.street + " " + profileData.barangay}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}></Text>
            <Text style={styles.userInfoValue}>{profileData.municipality + " " + profileData.zipCode}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#9ED5C5',
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 15,
  },
  button: {
    marginRight: 15,
  },
  userIcon: {
    width: 91,
    height: 91,
    borderRadius: 45.5,
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  emailIcon: {
    marginRight: 5,
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'white',
  },
  verification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  verificationCircle: {
    backgroundColor: 'white',
    borderRadius: 50, // Makes it a circle
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10, // Adjust the padding to control the circle's size
    marginRight: 5,
  },
  checkIcon: {
    color: '#9ED5C5',
    marginRight: 5,
  },
  verifiedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9ED5C5',
  },
  userInfoCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 3, // Add elevation for a card-like effect
  },
  userInfoContainer: {
    marginTop: 20,
  },
  userInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  userInfoLabel: {
    fontWeight: 'bold',
  },
  userInfoValue: {
    marginLeft: 25, 
  },
});

export default ProfileScreen;