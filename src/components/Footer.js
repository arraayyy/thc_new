import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({ activeTab, onChangeTab }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Home' ? styles.activeTab : null,
          ]}
          onPress={() => navigator.navigate("Home")}
        >
          <Icon name="home" size={24} color="white" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Services' ? styles.activeTab : null,
          ]}
          onPress={() => navigator.navigate("Services")}
        >
          <Icon name="briefcase-medical" size={24} color="white" />
          <Text style={styles.tabText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Profile' ? styles.activeTab : null,
          ]}
          onPress={() => navigator.navigate("Profile")}
        >
          <Icon name="user-alt" size={24} color="white" />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8EC3B0',
    height: 60,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#6DFFD3', // Active tab background color
  },
  tabText: {
    color: 'white',
    marginTop: 5,
  },
});

export default Footer;
