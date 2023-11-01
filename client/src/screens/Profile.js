import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Profile = () => {
  const route = useRoute();
    const profileId = route.params?.profileId;
  return (
    <View style={styles.container}>
      <Text>Profile ID: {profileId}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})