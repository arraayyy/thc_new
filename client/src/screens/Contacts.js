import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const Contacts = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Card>
        <Text style={styles.cardText}>
          <Text style={styles.bold}>Talamban Health Connect (THC)</Text> is a unique mobile application designed exclusively for the individuals in Talamban who want to avail health services in Talamban Health Center. Plus, you can check your health records from Talamban Health Center, all in one spot. No more waiting or dealing with lots of paperwork.
        </Text>
      </Card>

      <Card>
        <Text style={styles.cardHeader}>Accounts</Text>
        <Text style={styles.cardText}>
          - One account represents one family.
          {'\n\n'}
          - Basic family structure includes mother, father, child, or guardian.
          {'\n\n'}
          - Each person gets their own profile for health records.
          {'\n\n'}
          - Create a new account if:
            {'\n\n'}<Text style={{ fontStyle: 'italic' }}>1. All current family members haven't registered yet.</Text>
            {'\n'}<Text style={{ fontStyle: 'italic' }}>2. Someone in your family starts a new family.</Text>
            {'\n'}<Text style={{ fontStyle: 'italic' }}>3. Your child is expecting a child.</Text>
        </Text>
      </Card>


      <Card>
        <Text style={styles.cardHeader}>Registration</Text>
        <Text style={styles.cardText}>
          When everyone in the family is new to the app, start by filling up the registration form. Once submitted,<Text style={[{fontWeight:"bold"}]}>wait for a call from the health center for account verification is needed </Text> . If you already have an account and want to add a new family member, simply log in and look for the <Text style={{ fontStyle: 'italic' }}> Add </Text> button to include them in your account.
        </Text>
      </Card>

      <Card>
        <Text style={styles.cardHeader}>Forgot Password?</Text>
        <Text style={styles.cardText}>
          If everyone in the family forgets their password, <Text style={[{fontWeight:"bold"}]}>visit the health center in person</Text>. They'll help you with a default password to get back into your account. Once logged in, remember to change the password right away to keep your records safe and secure.
        </Text>
      </Card>

      <Card>
        <Text style={styles.cardText}>
          For further inquiries, <Text style={[{fontWeight:"bold"}]}>please visit the health center.</Text>
        </Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#6EC1B1',
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#555555',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Contacts;
