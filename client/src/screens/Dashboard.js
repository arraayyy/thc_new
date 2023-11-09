import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import Header from "../components/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getProfiles();
    }, [])
  );

  const getProfiles = async () => {
    const acctId = await AsyncStorage.getItem("accountId");

    try {
      const response = await axios.get(`/account/fetchmember/${acctId}`);
      const activeProfiles = response.data.profile.filter(profile => profile.prof_status !== "Inactive");
    setProfiles(activeProfiles);
    } catch (error) {
      console.error(error);
    }
  }
  console.log("prof_status: " ,profiles)
  const fetchProfile = async (user) => {
    try {
      await AsyncStorage.setItem('UserName', user.first_name);
      await AsyncStorage.setItem('ProfileId', user._id);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  }

  const navigateToAddProfile = () => {
    navigation.navigate('AddProfile');
  };

  const addButtonData = {
    _id: 'add',
    type: 'add',
    first_name: 'Add Profile',
  };

  return (
    <SafeAreaView>
      <Header height={150} />
      <View style={{ alignItems: 'center' }}>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-evenly', marginBottom: 20 }}
            keyExtractor={(item) => item._id}
            data={[...profiles, addButtonData]} // Include the "Add" button in the data
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (item.type === 'add') {
                      navigateToAddProfile();
                    } else {
                      fetchProfile(item);
                    }
                  }}
                  style={item.type === 'add' ? styles.addButton : styles.profileContainer}>
                  <View style={styles.profileIconContainer}>
                    {item.type === 'add' ? (
                      <Icon style={{ fontSize: 25 }} name='user-plus' size={15} color='#E0E2E1' />
                    ) : (
                      <Icon style={styles.icon} name='user-alt' size={15} color='#E0E2E1' />
                    )}
                  </View>
                  <Text numberOfLines={1} style={styles.iconName}>
                    {item.type === 'add' ? item.first_name : `${item.first_name} ${item.middle_name.charAt(0)} ${item.last_name}`}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingTop: 50,
    borderTopColor: '#000',
    marginVertical: 25,
    width: width,
  },
  profileContainer: {
    paddingTop: 5,
    backgroundColor: '#E6EDED',
    width: 130,
    height: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'relative',
    width: 130,
    height: 110,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EDED',
  },
  profileIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#44AA92',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
  },
  iconName: {
    paddingVertical: 5,
    color: '#44AA92',
    fontWeight: 'bold',
  },
});
