import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('otp')}>
        <Image source={require("../assets/backArrow.png")} style={styles.backArrow} /></TouchableOpacity>
      <Text style={styles.heading}>Create your account</Text>

      <Text style={styles.subheading}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Aman Sharma" />

      <Text style={styles.subheading}>Email Address</Text>
      <TextInput style={styles.input} placeholder="example@company.com" keyboardType="email-address" />

      <Text style={styles.subheading}>Date of birth</Text>
      <TextInput style={styles.input} placeholder="--/--/--" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerificationCode')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  backArrow: {
    height:30,
    width:30,
    marginTop:25,
  },
  heading: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: 100,
    backgroundColor: 'black',
    borderRadius: 33,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    marginRight:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;
