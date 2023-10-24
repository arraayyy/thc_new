import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
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
        <Image
          source={require('../../assets/user.png')}
          style={styles.userIcon}
        />
        <Text style={[styles.userName, { color: 'white' }]}>Jane Doe</Text>
        <View style={styles.userInfo}>
          <Icon name="envelope" size={20} color="white" style={styles.emailIcon} />
          <Text style={[styles.email, { color: 'white' }]}>jane.doe@example.com</Text>
        </View>
        <View style={styles.verification}>
          <View style={styles.verificationCircle}>
            <Icon name="check-circle" size={20} color="#9ED5C5" style={styles.checkIcon} />
            <Text style={styles.verifiedText}>Verified Resident</Text>
          </View>
        </View>
      </View>

      {/* User Information Card */}
      <View style={styles.userInfoCard}>
        {/* Additional User Information */}
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Gender:</Text>
            <Text style={styles.userInfoValue}>Female</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Age:</Text>
            <Text style={styles.userInfoValue}>30</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Education:</Text>
            <Text style={styles.userInfoValue}>Master's Degree</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Occupation:</Text>
            <Text style={styles.userInfoValue}>Software Developer</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Contact:</Text>
            <Text style={styles.userInfoValue}>123-456-7890</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Nationality:</Text>
            <Text style={styles.userInfoValue}>US</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoLabel}>Address:</Text>
            <Text style={styles.userInfoValue}>123 Main St, City, Country</Text>
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
