import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/thc.png' 

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40, // Adjust the padding as needed
  },
  logo: {
    width: '200%',
    height: 150,
    resizeMode: 'contain', // Adjust the image resizeMode as needed
  },
});

export default Header;